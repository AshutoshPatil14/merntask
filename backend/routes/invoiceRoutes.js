const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth.protect, invoiceController.getInvoices);
router.post('/', auth.protect, auth.adminOnly, invoiceController.createInvoice);
router.put('/:id', auth.protect, auth.adminOnly, invoiceController.updateInvoice);
router.delete('/:id', auth.protect, auth.adminOnly, invoiceController.deleteInvoice);

module.exports = router;