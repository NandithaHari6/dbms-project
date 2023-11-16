const express = require("express");
const app=express();
const cors = require('cors');
const bodyParser = require("body-parser");
const customer=require("./routes/customerRoutes");
const loan=require("./routes/loanRoutes");
const login=require("./controller/loginController.js");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/customer",customer);
app.use("/loan",loan);
app.use("/",login);

module.exports=app;