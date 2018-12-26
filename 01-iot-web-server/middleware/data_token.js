const User = require('../models/User');
const createError = require('http-errors');
const shortid = require('shortid');

module.exports.checkDataToken = (req, res, next) => {
    const user_id = req.params.user_id;
    const data_token = req.body.data_token || req.query.data_token;
    if (!shortid.isValid(user_id) || !shortid.isValid(data_token)) {
        next(createError(404, 'Incorrect user id or data token'));
    }
    User.findOne({$and: [{_id: user_id}, {data_token}]})
        .then(user => {
            if (user) {
                next();
            }
            else {
                next(createError(404, 'Incorrect user or data token'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
}