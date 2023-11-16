// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const  Userdata  = require('../models/customermodel');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const {customerId: username, customerPassword:password ,userType} = req.body;

  try {
    
    const user = await Userdata.findOne({customerId:username});
    

    // If the user does not exist, or the passwords do not match, send an error response
    if (!user || !(await bcrypt.compare(password, user.customerPassword))) {
      
      return res.status(401).json({ error: 'Invalid username or password' });

    }else{
      
      return res.status(200).json({ msg :"success" });
    }

    // If the passwords match, redirect to another route (e.g., dashboard)res.redirect('/dashboard'); // Replace '/dashboard' with the desired route

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
