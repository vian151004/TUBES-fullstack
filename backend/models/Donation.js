const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campaign_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
