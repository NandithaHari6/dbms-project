
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LoansByBank from './LoansByBank';
import LoanDetailsByCustomer from './LoanDetailsByCustomer';
import LoanApplicationForm from './LoanApplicationForm';

function BankPage() {
  return (
   
        
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/loans-by-bank">Loans By Bank</NavLink>
            </li>
            <li>
              <NavLink to="/loan-details-by-customer">Loan Details By Customer</NavLink>
            </li>
            <li>
              <NavLink to="/loan-application-form">Loan Application Form</NavLink>
            </li>
          </ul>
        </nav>

       <Routes>

      
          <Route path="/loans-by-bank" element={<LoansByBank />} />
          <Route path="/loan-details-by-customer" element={<LoanDetailsByCustomer />} />
          <Route path="/loan-application-form" element={<LoanApplicationForm />} />
        </Routes>
      </div>
 
  );
}

export default BankPage;
