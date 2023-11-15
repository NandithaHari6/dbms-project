const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema({
  loanId: {
    type: Number,
    unique: true,
  },
  bankId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  interest: {
    type: Number
  },
  loanType: {
    type: String,
    required: true,
  },
  requestFlag: {
    type: Boolean,
    default: true,
  },
  emiAmount: {
    type: Number
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number
  }
});

// Middleware to increment loanId before saving a new document
loanSchema.pre('save', async function (next) {
  try {
    if (!this.loanId) {
      // Increment loanId only if it's not provided (for a new entry)
      const lastLoan = await Loan.findOne({}, {}, { sort: { loanId: -1 } });
      this.loanId = (lastLoan ? lastLoan.loanId+1 : 20000) ;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
