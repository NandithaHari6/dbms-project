const express = require('express');
const router = express.Router();
const customer=require("../controller/customerController");
const  loan= require('../controller/loanController');
router.post("/addLoan",loan.addLoan);
router.get("/getAllLoans:bankId",loan.getAllLoans);

router.post("/delete:loanId",loan.deleteLoan);
router.get("/getLoanDetails:customerId",customer.getLoanDetails);
module.exports=router;
