const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    donation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donation',
        required: true
    },
    method: {
        type: String,
        enum: ['transfer_bank', 'credit_card', 'e_wallet'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    paid_at: {
        type: Date
    },
    total_amount: {
        type: Number,
        required: true
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
