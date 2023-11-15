const Customer = require("../models/customermodel.js");
const mongoose = require("mongoose");
const addNewCustomer = async (req, res) => {
    const { selectedBank,
        customerId,
        customerPassword,
        customerName,
        dob,
        address,
        phoneNumber,
        nominee,
        relation
    } = req.body;
    const bankId = determineBankId(selectedBank);
    
    const newCustomer = new Customer({
        customerId,
        customerPassword,
        customerName,
        dob,
        address,
        phoneNumber,
        nominee,
        relation,
        bankId
    });

    try {
        // Save the new customer to the database
        const savedCustomer = await newCustomer.save();

        console.log('Customer added successfully:', savedCustomer);
        res.status(201).json({ message: 'Customer added successfully' });
    } catch (error) {
        console.error('Error adding customer:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Function to determine the bankId based on the selected option
function determineBankId(selectedBank) {
    // Add your logic here to determine the bankId based on the selected option
    // This might involve querying a bank collection in the database or using a predefined mapping
    // For simplicity, let's assume a direct mapping for demonstration purposes
    const bankIdMap = {
        option1: 'bank1',
        option2: 'bank2',
        // Add more mappings as needed
    };

    return bankIdMap[selectedBank] || 'defaultBank'; // Default to a fallback bank if the mapping is not found
}


module.exports = { addNewCustomer };
