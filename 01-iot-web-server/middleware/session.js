const Session = require('../models/Session');
const createError = require('http-errors');
const shortid = require('shortid');

module.exports.isUserLogged = (req, res, next) => {
    const user_id = req.params.user_id;
    const session_token = req.query.session_token || req.body.session_token;

    if (!shortid.isValid(user_id) || !shortid.isValid(session_token)) {
        next(createError(404, 'Not found'));
    }

    const query = {user_id, session_token};
    Session.findOne(query)
        .then(session => {
            if (session) {
                next();
            }
            else {
                next(createError(401, 'User is not authorized'));
            }
        })
        .catch(err => next(createError(500, 'Server error')));
}