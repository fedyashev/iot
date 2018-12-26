const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    _id: {type: String, default: shortid.generate},
    username: {type: String, required: true},
    passwordHash: {type: String, required: true},
    email: {type: String, required: true},
    data_token: {type: String, default: shortid.generate},
    devices: [{type: ObjectId, ref: 'Device', default: []}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;