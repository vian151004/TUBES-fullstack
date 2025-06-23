const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    target_amount: {
        type: Number,
        required: true
    },
    current_amount: {
        type: Number,
        default: 0
    },
    deadline: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium'
    }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
