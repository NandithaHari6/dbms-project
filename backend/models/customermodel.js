const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const customer=new mongoose.Schema({
    customerId:{
        type:Number,
        required:true
    },
    customerName:{
        type:String,
        required:[true,"Please enter your name"]
    },
    customerPassword:{
        type:String,
        required:[true,"Please enter your password"]
    },
    dob:{
        type:Date,
        required:[true,"Please enter date of birth"]
        },
    address:{
       type:String
    },
    phoneNumber:{
        type:Number,
        required:[true,"Please enter a valid phone number"]
    },
    nominee:{
        type:String,
        required:true
    },
    relation:{
        type:String,
        required:true
 },
 cibilScore: {
    type: Number,
   default:900
  },
  
 accountNumber: {
    type: String,
    
    unique: true
  },
  bankId:{
    type: String,
    required: true
  }


});
customer.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};
// Hash the password before saving it to the database
customer.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.customerPassword, salt);
    this.customerPassword = hashedPassword;
    
      if (!this.accountNumber) {
        // Find the maximum accountNumber in the database and increment it
        const maxAccountNumber = await mongoose.model('Customer').find().sort({ accountNumber: -1 }).limit(1);
        const newAccountNumber = maxAccountNumber.length > 0 ? incrementAccountNumber(maxAccountNumber[0].accountNumber) : '100000000000';
        this.accountNumber = newAccountNumber;
      }
  
    next();
  } catch (error) {
    next(error);
  }
});

function incrementAccountNumber(accountNumber) {
  const number = parseInt(accountNumber) + 1;
  return number.toString().padStart(12, '0');
}



const Customer=mongoose.model("Customer",customer);

module.exports=  Customer ;
