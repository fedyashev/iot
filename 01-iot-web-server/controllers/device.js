const User = require('../models/User');
const Device = require('../models/Device');

const createError = require('http-errors');

// Create a new device
module.exports.createNewDevice = (req, res, next) => {
    const {user_id} = req.params;
    const {name} = req.body;
    User.findOne({_id: user_id})
        .populate('devices')
        .then(user => {
            if (user) {
                const device = new Device({name: name});
                user.devices.push(device);
                user.save()
                    .then(user => {
                        device.save()
                            .then(device => {
                                res.json(device);
                            })
                            .catch(err => next(createError(500, err.message || 'Device save error')));
                    })
                    .catch(err => next(createError(500, err.message || 'User save error')))
            }
            else {
                next(createError(404, 'User not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
};

// Get device info by id
module.exports.getDeviceInfoById = (req, res, next) => {
    const {user_id, device_id} = req.params;
    User.findById({_id: user_id})
        .populate('devices')
        .then(user => {
            if (user) {
                const device = user.devices.find(d => d._id === device_id);
                if (device) {
                    res.json(device);
                }
                else {
                    next(createError(404, 'Device not found'));
                }
            }
            else {
                next(createError(404, 'User not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User db error')));
};

// Update device info
module.exports.updateDeviceInfo = (req, res, next) => {
    const {user_id, device_id} = req.params;
    const {name} = req.body;
    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {            
            if (user) {
                const device = user.devices.find(d => d._id === device_id);
                if (device) {
                    device.name = name;
                    device.save()
                        .then(dev => res.json(dev))
                        .catch(err => next(createError(500, err.message || 'Device update error')));
                }
                else {
                    next(createError(404, 'Device not found'));
                }
            }
            else {
                next(createError(404, 'User not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
};

// Device device
module.exports.deleteDevice = (req, res, next) => {
    const {user_id, device_id} = req.params;
    User.findById({_id: user_id})
        .populate('devices')
        .then(user => {
            if (user) {
                const device = user.devices.find(d => d._id === device_id);
                if (device) {
                    const devices = [...user.devices];
                    user.devices = devices.filter(d => d._id !== device_id);
                    user.save()
                        .then(user => {
                            Device.deleteOne({_id: device_id})
                                .then(device => {
                                    res.json({device_id, deleted: true});
                                })
                                .catch(err => next(createError(500, err.message || 'Device delete error')));
                        })
                        .catch(err => next(createError(500, err.message || 'User save error')));
                }
                else {
                    next(createError(404, 'Device not found'));
                }
            }
            else {
                next(createError(404, 'User not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
}