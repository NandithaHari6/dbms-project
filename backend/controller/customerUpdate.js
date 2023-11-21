const express = require('express');
const bcrypt = require('bcrypt');
const Customer = require('../models/customermodel');

const router = express.Router();

// Update customer information excluding the password
router.post('/update:customerId', async (req, res) => {
  const { customerId } = req.params;
  const { address, nominee, relation, phoneNumber } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ customerId });

    if (!existingCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update customer information
    existingCustomer.address = address;
    existingCustomer.nominee = nominee;
    existingCustomer.relation = relation;
    existingCustomer.phoneNumber = phoneNumber;

    // Save changes to the database without rehashing the password
    await existingCustomer.save({ validateBeforeSave: false });

    res.json({ message: 'Customer information updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;