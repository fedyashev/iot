const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const SessionSchema = new Schema({
    user_id: {type: String, required: true},
    session_token: {type: String, default: shortid.generate}
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;