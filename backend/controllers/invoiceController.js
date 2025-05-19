const Invoice = require('../models/Invoice');

exports.getInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
};

exports.createInvoice = async (req, res) => {
  const newInvoice = new Invoice(req.body);
  await newInvoice.save();
  res.status(201).json(newInvoice);
};

exports.updateInvoice = async (req, res) => {
  const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteInvoice = async (req, res) => {
  await Invoice.findByIdAndDelete(req.params.id);
  res.status(204).send();
};