const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    senderWallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
    receiverWallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
