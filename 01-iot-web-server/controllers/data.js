const User = require('../models/User');
const Device = require('../models/Device');
const Sensor = require('../models/Sensor');
const Data = require('../models/Data');

const createError = require('http-errors');


module.exports.setSensorDataById = (req, res, next) => {
    const {user_id, device_id, sensor_id} = req.params;
    const {value} = req.body;
    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            },
        })
        .then(user => {
            const sensor = user
                .devices.find(d => d._id === device_id)
                .sensors.find(s => s._id === sensor_id);
            if (sensor) {
                Data(sensor_id).create({value})
                    .then(data => {
                        sensor.set({lastData: data})
                            .save()
                            .then(sensor => res.json(sensor))
                            .catch(err => next(createError(500, err.message)));
                    })
                    .catch(err => next(createError(500, err.message)));
            }
            else {
                next(createError(404, 'Sensor not found'));
            }
        })
        .catch(err => next(createError(500, err.message)));
};

module.exports.getSensorData = (req, res, next) => {
    const {user_id, device_id, sensor_id} = req.params;
    const {result, sort, from, to, limit} = req.query;
    let lim = Number(limit);
    console.log(limit);
    User.findById({_id: user_id})
        .populate({
            path: 'devices',
            populate: {
                path: 'sensors'
            },
        })
        .then(user => {
            const sensor = user
                .devices.find(d => d._id === device_id)
                .sensors.find(s => s._id === sensor_id);
            if (sensor) {
                let promise;
                switch (result) {
                    case 'last': {
                        promise = Data(sensor_id)
                            //.getLastData();
                            .find({})
                            .sort({date: -1})
                            .limit(1);
                    }
                    break;

                    case 'all' : {
                        promise = Data(sensor_id)
                            .find({})
                            .sort({date: sort === 'desc' ? -1 : 1 })
                            .limit(Number.isInteger(lim) && lim > 0 ? lim : 0);
                    }
                    break;

                    case 'range' : {
                        promise = Data(sensor_id)
                            .find({})
                            .sort({date: sort === 'desc' ? -1 : 1 });
                    }
                    break;

                    default: {
                        promise = Data(sensor_id)
                            .find({})
                            .sort({date: sort === 'desc' ? -1 : 1 })
                            .limit(Number.isInteger(lim) && lim > 0 ? lim : 0);
                    }
                }
                promise
                    .then(data => res.json(data))
                    .catch(err => next(createError(500, err.message)));
            }
            else {
                next(createError(404, 'Sensor not found'));
            }
        })
        .catch(err => next(createError(500, err.message)));
};

module.exports.setDeviceSensorsData = (req, res, next) => {
    const {user_id, device_id} = req.params;
    const {data} = req.body;
    if (!Array.isArray(data) || !data.length) {
        next(createError(404, 'Incorrect data'));
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
            if (device) {
                let i = data.length;
                data.forEach(el => {
                    const sensor = device.sensors.find(s => s._id === el.sid);
                    if (sensor) {
                        Data(el.sid).create({value: el.v})
                            .then(data => {
                                sensor.set({lastData: data})
                                    .save()
                                    .then(sensor => {
                                        i--;
                                        if (!i) {
                                            res.json({done: true});
                                        }
                                    })
                                    .catch(err => next(createError(500, err.message)));
                            })
                            .catch(err => next(createError(500, err.message)));
                    }
                });
            }
            else {
                next(createError(404, 'Device not found'));
            }
        })
        .catch(err => next(createError(500, err.message)));
};