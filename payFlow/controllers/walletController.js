const Wallet = require('../models/walletModel');
const Transaction = require('../models/transactionModel');

// Transfer money between wallets
const transferMoney = async (req, res) => {
    const { senderWalletId, receiverWalletId, amount } = req.body;

    if (!senderWalletId || !receiverWalletId || !amount) {
        return res.status(400).json({ error: 'senderWalletId, receiverWalletId and amount are required' });
    }

    if (amount <= 0) {
        return res.status(400).json({ error: 'Transfer amount must be greater than zero' });
    }

    try {
        // Find sender and receiver wallets
        const senderWallet = await Wallet.findById(senderWalletId);
        const receiverWallet = await Wallet.findById(receiverWalletId);

        if (!senderWallet) {
            return res.status(404).json({ error: 'Sender wallet not found' });
        }

        if (!receiverWallet) {
            return res.status(404).json({ error: 'Receiver wallet not found' });
        }

        // Check if sender has sufficient balance
        if (senderWallet.balance < amount) {
            return res.status(400).json({ error: 'Insufficient balance in sender wallet' });
        }

        // Perform transfer
        senderWallet.balance -= amount;
        receiverWallet.balance += amount;

        // Save updated wallets
        await senderWallet.save();
        await receiverWallet.save();

        // Log the transaction
        const transaction = new Transaction({
            senderWallet: senderWalletId,
            receiverWallet: receiverWalletId,
            amount,
            status: 'completed'
        });
        await transaction.save();

        return res.status(200).json({ message: 'Transfer successful', senderWallet, receiverWallet, transaction });
    } catch (error) {
        console.error('Error during transfer:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    transferMoney,
};
