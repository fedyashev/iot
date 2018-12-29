const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    date: {type: Date, default: Date.now},
    value: {type: Number, required: true}
});

const Data = sensor_id => {
    const model = mongoose.model(`Sensor_${sensor_id}_data`, DataSchema)

    model.getLastData = function() {
        return this
            .find({})
            .sort({date: -1})
            .limit(1);
    }

    return model;
};

module.exports = Data;
module.exports.Schema = DataSchema;
