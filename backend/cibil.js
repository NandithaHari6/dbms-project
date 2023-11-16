const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

const mongoURI = 'your_mongo_db_connection_string'; // Replace with your MongoDB connection string
const dbName = 'your_database_name'; // Replace with your database name
const collectionName = 'loans'; // Replace with your collection name

// Connect to MongoDB
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);
  const loansCollection = db.collection(collectionName);

  // Endpoint to get loan details for a given customerId
  app.get('/loans/:customerId', async (req, res) => {
    const customerId = req.params.customerId;

    try {
      // Find the loan based on customerId and requestFlag condition
      const foundLoan = await loansCollection.findOne({ customerId: customerId, requestFlag: false });

      if (!foundLoan) {
        // If no matching loan is found, return a 404 Not Found status
        res.status(404).send('Loan not found for the specified customer and condition.');
      } else {
        // If a matching loan is found, respond with the loan details
        res.json({
          loanId: foundLoan._id, // Assuming your MongoDB document has an _id field
          bankId: foundLoan.bankId,
          customerId: foundLoan.customerId,
          loanAmount: foundLoan.loanAmount,
          interest: foundLoan.interest,
          loanType: foundLoan.loanType,
          emiAmount: foundLoan.emiAmount,
          startDate: foundLoan.startDate,
          duration: foundLoan.duration,
        });
      }
    } catch (error) {
      console.error('Error fetching loan:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
