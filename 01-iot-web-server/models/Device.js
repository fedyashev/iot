const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const ObjectId = mongoose.Schema.Types.ObjectId;

const DeviceSchema = new Schema({
    _id: {type: String, default: shortid.generate},
    name: {type: String, required: true},
    sensors: [{type: ObjectId, ref: 'Sensor'}]
});

const Device = mongoose.model('Device', DeviceSchema);

module.exports = Device;