
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import LoanDetailsByCustomer from './LoanDetailsByCustomer';


function CustomerPage() {
  return (
    <Router>
        
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/cust-details">Customer details</NavLink>
            </li>
            <li>
              <NavLink to="/loan-details-by-customer">Loan Details Of Customer</NavLink>
            </li>
           
          </ul>
        </nav>

       <Routes>

      
          <Route path="/cust-details" element={<PersonalDetails />} />
          <Route path="/loan-details-by-customer" element={<LoanDetailsByCustomer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default CustomerPage;