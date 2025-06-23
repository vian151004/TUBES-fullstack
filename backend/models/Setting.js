const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;