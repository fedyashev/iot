const createError = require('http-errors');
const shortid = require('shortid');

const User = require('../models/User');
const Device = require('../models/Device');
const Sensor = require('../models/Sensor');
const Data = require('../models/Data');

module.exports.getSensorsList = (req, res, next) => {
    const {user_id, device_id} = req.params;
    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {
            if (user) {
                res.json(user);
            }
            else {
                next(createError(404, 'User not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
}

module.exports.createNewSensor = (req, res, next) => {
    const {user_id, device_id} = req.params;
    const {name, units} = req.body;
    if (!name || !units) {
        next(createError(404, 'Incorrect name or units value'));
    }
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
                    Sensor.create({name, units})
                        .then(sensor => {
                            const sensors = [...device.sensors, sensor];
                            device.sensors = sensors;
                            device.save()
                                .then(dev => {
                                    res.json(sensor);
                                })
                                .catch(err => next(createError(500, err.message || 'Device save error')));
                        })
                        .catch(err => next(createError(500, err.message || 'Sensor create error')));
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

module.exports.getSensorInfoById = (req, res, next) => {
    const {user_id, device_id, sensor_id} = req.params;
    if (!shortid.isValid(user_id) || !shortid.isValid(device_id) || !shortid.isValid(sensor_id)) {
        next(createError(404, 'Resource not found'));
    }

    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {
            const sensor = user
                .devices.find(d => d._id === device_id)
                .sensors.find(s => s._id === sensor_id);
            if (sensor) {
                res.json(sensor);
            }
            else {
                next(createError(404, 'Sensor not found'));
            }
        })
        .catch(err => next(createError(500, err.message)));
};

module.exports.updateSensorInfoById = (req, res, next) => {
    const {user_id, device_id, sensor_id} = req.params;
    if (!shortid.isValid(user_id) || !shortid.isValid(device_id) || !shortid.isValid(sensor_id)) {
        next(createError(404, 'Resource not found'));
    }

    const {name, units} = req.body;
    if (!name || !units) {
        next(createError(404, 'Incorrect name or units values'));
    }

    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {
            const sensor = user
                .devices.find(d => d._id === device_id)
                .sensors.find(s => s._id === sensor_id);
            if (sensor) {
                sensor.name = name;
                sensor.units = units;
                sensor.save()
                    .then(newSensor => {
                        res.json(newSensor);
                    })
                    .catch(err => next(createError(500, err.message || 'Sensor save error')));
            }
            else {
                next(createError(404, 'Sensor not found'));
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
};

module.exports.deleteSensorById = (req, res, next) => {
    const {user_id, device_id, sensor_id} = req.params;
    if (!shortid.isValid(user_id) || !shortid.isValid(device_id) || !shortid.isValid(sensor_id)) {
        next(createError(404, 'Resource not found'));
    }

    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            }
        })
        .then(user => {
            const device = user.devices.find(d => d._id === device_id);
            const sensor = device.sensors.find(s => s._id === sensor_id);
            if (sensor) {
                const sensors = [...device.sensors].filter(s => s._id !== sensor_id);
                device.sensors = sensors;
                device.save()
                    .then(updatedDevice => {
                        Sensor.deleteOne({_id: sensor_id})
                            .then(result => {
                                Data(sensor_id)
                                    .collection
                                    .drop()
                                    .then(result => res.json({sensor_id, deleted: true}))
                                    .catch(err => next(createError(500, err.message)))
                            })
                            .catch(err => next(createError(500, err.message || 'Sensor delete error')));
                    })
                    .catch(err => next(createError(501, err.message || 'Device update error')));
            }
            else {
                next(createError(404, 'Sensor not found'))
            }
        })
        .catch(err => next(createError(500, err.message || 'User collection error')));
}