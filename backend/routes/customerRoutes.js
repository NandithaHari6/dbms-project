const express = require('express');
const router = express.Router();
const customer=require("../controller/customerController");
router.post("/addCustomer",customer.addNewCustomer);
router.get("/getPersonalDetails:customerId",customer.getPersonalDetails);
router.get("/getLoanDetails:customerId",customer.getLoanDetails);
router.post("/update:customerId",customer.updateCustomerDetails);
module.exports=router;
