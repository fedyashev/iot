const User = require('../models/User');
const Device = require('../models/Device');

const createError = require('http-errors');

module.exports.getUserById = (req, res, next) => {
    const user_id = req.params.user_id;
    User.findOne({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {
            if (user) {
                //console.log(user);
                const {_id, username, email, data_token, devices} = user;
                const resObj = {_id, username, email, data_token, devices};
                res.json(resObj);
            }
            else {
                res.status(404).json({error: 'User not found.'});
            }
        })
        .catch(err => next(createError(500, err.message)));
};

module.exports.getDeviceList = (req, res, next) => {
    const user_id = req.params.user_id;
    User.findOne({_id: user_id})
        .populate('devices')
        .then(user => {
            if (user) {
                const {devices} = user;
                console.log(user);
                res.json({devices});
            }
            else {
                res.status(404).json('User not found.');
            }
        })
        .catch(err => res.status(500).json(err));
};

