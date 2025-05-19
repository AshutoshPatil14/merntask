const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceId: String,
  clientName: String,
  amount: Number,
  fiscalYear: String,
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);