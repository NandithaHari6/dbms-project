const express = require('express');
const router = express.Router();
const customer=require("../controller/customerController");
router.post("/addCustomer",customer.addNewCustomer);
module.exports=router;