
const Customer = require('../models/customermodel'); // Import your Customer model
const Loan = require('../models/loanModel'); // Import your Loan model
 async function addLoan(req, res){
  const { customerId, loanAmount, loanType, bankId } = req.body;

  try {
    // Fetch the customer's CIBIL score
    const customer = await Customer.findOne({ customerId });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    const cibilScore = customer.cibilScore;
// Check if the CIBIL score is above 700
    if (cibilScore >= 700) {
      let interestRate, duration;

      // Determine interest rate and duration based on loan type
      if (loanType === 'personal') {
        interestRate = 8; // Set your interest rate for personal loans
        duration = 12; // Set your duration for personal loans
      } else if (loanType === 'home') {
        interestRate = 6; // Set your interest rate for home loans
        duration = 24; // Set your duration for home loans
      } else {
        // Handle other loan types
        return res.status(400).json({ error: 'Invalid loan type' });
      }

      // Calculate EMI amount
      const emiAmount = loanAmount / duration;
 
      // Create a new loan entry
      const newLoan = new Loan({
        customerId,
        loanAmount,
        loanType,
        bankId,
        requestFlag: false,
        emiAmount,
        startDate: new Date(),
        duration,
      });

      // Save the loan to the database
      const savedLoan = await newLoan.save();
      const updatedCIBILScore= await calculateCIBILScore(customerId);
      await Customer.findOneAndUpdate({ customerId },  { cibilScore: updatedCIBILScore } );
      res.status(200).json({
        message: 'Loan request approved',
        interestRate,
        duration,
        emiAmount,
        loan: savedLoan,
      });
    } else {
      res.status(403).json({ error: 'Loan request rejected due to low CIBIL score' });
    }
  } catch (error) {
    console.error('Error processing loan request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const getAllLoans=async(req, res) => {
  const bankId = req.params.bankId;

  try {
    // Find the loan based on customerId and requestFlag condition
    const foundLoan = await Loan.find({ bankId,requestFlag: false});
    

    if (!foundLoan) {
      // If no matching loan is found, return a 404 Not Found status
      res.status(404).send('Loan not found for the bank.');
    } else {
      res.json(foundLoan);
    }
  } catch (error) {
    console.error('Error fetching loan:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports ={addLoan,getAllLoans }  ;
async function calculateCIBILScore(customerId){
    try {
      // Fetch all loans for the customer with requestFlag set to false
      const loans = await Loan.find({ customerId, requestFlag: false });
  
      // Calculate the sum of loan amounts divided by 1,000,000 and multiplied by a constant rate
      const loanAmountSum = loans.reduce((sum, loan) => sum + loan.loanAmount, 0);
      const loanAmountScore = (loanAmountSum / 1000000) * 100; // Adjust the constant rate as needed
  
      // Calculate the sum of durations divided by 100
      const durationSum = loans.reduce((sum, loan) => sum + loan.duration, 0);
      const durationScore = (durationSum / 100)*50;
  
      // Add the two scores to get the final CIBIL score
      const finalCIBILScore = 900-(loanAmountScore + durationScore);
      console.log(finalCIBILScore)
  
      return Number(finalCIBILScore);
    } catch (error) {
      console.error('Error calculating CIBIL score:', error);
      throw error;
    }}
    