const Customer = require("../models/customermodel.js");
const mongoose = require("mongoose");
const loan=require("../models/loanModel")
const updateCustomerDetails = async (req, res) => {
    const customerId = req.params.customerId;
    console.log("helloooo");

    // Extract the fields that you want to update from the request body
    const { address, phoneNumber, nominee, relation } = req.body;

    try {
        // Find the customer based on customerId
        const customer = await Customer.findOne({ customerId });

        if (!customer) {
            // If no matching customer is found, return a 404 Not Found status
            res.status(404).send('Customer not found for the specified id.');
        } else {
            // Update the customer details with the new values
            if (address) customer.address = address;
            if (phoneNumber) customer.phoneNumber = phoneNumber;
            if (nominee) customer.nominee = nominee;
            if (relation) customer.relation = relation;

            // Save the updated customer to the database, excluding customerPassword
            const updatedCustomer = await customer.save({ fields: { customerPassword: 0 } });

            // Respond with the updated customer details
            res.json(updatedCustomer);
        }
    } catch (error) {
        console.error('Error updating customer details:', error);
        res.status(500).send('Internal Server Error');
    }
};

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
const getLoanDetails=async(req, res) => {
    const customerId = req.params.customerId;

    try {
      // Find the loan based on customerId and requestFlag condition
      const foundLoan = await loan.find({ customerId,requestFlag: false});
      

      if (!foundLoan) {
        // If no matching loan is found, return a 404 Not Found status
        res.status(404).send('Loan not found for the specified customer and condition.');
      } else {
       
        // If a matching loan is found, respond with the loan details
       /* res.json({
          loanId: foundLoan._id, // Assuming your MongoDB document has an _id field
          bankId: foundLoan.bankId,
          customerId: foundLoan.customerId,
          loanAmount: foundLoan.loanAmount,
          interest: foundLoan.interest,
          loanType: foundLoan.loanType,
          emiAmount: foundLoan.emiAmount,
          startDate: foundLoan.startDate,
          duration: foundLoan.duration,
        });*/
        res.json(foundLoan);
      }
    } catch (error) {
      console.error('Error fetching loan:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  const getPersonalDetails=async(req, res) => {
    const customerId = req.params.customerId;

    try {
      // Find the loan based on customerId and requestFlag condition
      const customer = await Customer.find({ customerId});
      

      if (!customer) {
        // If no matching loan is found, return a 404 Not Found status
        res.status(404).send('Customer not added !! check your id');
      } else {
        res.json(customer);
      }
    } catch (error) {
      console.error('Error getting customer dettails:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  

module.exports = { addNewCustomer,getLoanDetails,getPersonalDetails, updateCustomerDetails};
