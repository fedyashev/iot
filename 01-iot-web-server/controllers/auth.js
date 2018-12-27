const {cryptPassword, comparePassword} = require('../lib/crypt');
const createError = require('http-errors');

const User = require('../models/User');
const Session = require('../models/Session');

module.exports.registrate = (req, res, next) => {
    const {username, password, email} = req.body;
    const query = {$or: [ {username: username}, {email: email} ]};
    User.find(query)
        .then(users => {
            if (users.length > 0) {
                // const err = {error: `User or email already exists.`};
                // res.status(400).json(err);
                next(createError(400, 'User or email already exists'));
            }
            else {
                cryptPassword(password, (err, hash) => {
                    if (err) {
                        //res.status(500).json(err);
                        next(createError(500, 'Password crypt error'));
                    }
                    const newUser = {
                        username,
                        passwordHash: hash,
                        email
                    };
                    User.create(newUser)
                        .then(user => {
                            console.log(user);
                            res.json({username: user.username, user_id: user._id});
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json(err);
                        });
                });
            }
        })
        .catch(err => next(createError(500, 'User db error')));
};

module.exports.login = (req, res, next) => {
    const {username, password} = req.body;
    //const loginError = {error: 'Incorrect login or password'};
    const loginError = new Error('Incorrect login or password');
    User.findOne({username})
        .then(user => {
            comparePassword(password, user.passwordHash, (err, isPasswordMatch) => {
                if (err) {
                    //res.json(500, err);
                    next(createError(500, 'Password comparation error'));
                }
                if (isPasswordMatch) {
                    Session.findOne({user_id: user._id})
                        .then(session => {
                            if (session) {
                                res.json({
                                    user_id: user._id,
                                    session_token: session.session_token
                                });
                            }
                            else {
                                Session.create({user_id: user._id})
                                    .then(session => {
                                        res.json({
                                            user_id: user._id,
                                            session_token: session.session_token
                                        });
                                    })
                                    .catch(err => res.json(500, err));
                            }
                        })
                        .catch(err => res.json(500, err));
                    //res.json({user_id: user._id});
                }
                else {
                    res.json(400, loginError);
                }
            });
        })
        .catch(err => res.status(400).json(loginError));
};

module.exports.logout = (req, res, next) => {
    const {user_id, session_token} = req.body;
    Session.findOne({user_id, session_token})
        .then(session => {
            if (session) {
                Session.deleteOne({user_id, session_token})
                    .then(session => {
                        res.json({
                            user_id: user_id,
                            session_token: null
                        });
                    })
                    .catch(err => next(createError(500, err.message)));
            }
            else {
                next(createError(404, 'User and session not found'));
            }
        })
        .catch(err => next(createError(500, err.message)));
};