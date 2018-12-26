const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Data = require('./Data');

const SensorSchema = new Schema({
    _id: {type: String, default: shortid.generate},
    name: {type: String, required: true},
    units: {type: String, require: true},
    lastData: Data.Schema
});

const Sensor = mongoose.model('Sensor', SensorSchema);

module.exports = Sensor;