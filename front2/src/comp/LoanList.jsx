// src/LoanList.js
import React from 'react';
import "./styles.css"
function LoanList({ loans }) {
  return (
    <div>
      <h2>Loan List</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            <strong>Loan ID:</strong> {loan.loanId}
            <br />
            <strong>Bank ID:</strong> {loan.bankId}
            <br />
            <strong>Customer ID:</strong> {loan.customerId}
            <br />
            <strong>Loan Amount:</strong> {loan.loanAmount}
            <br />
            <strong>Loan Type:</strong> {loan.loanType}
            <br />
            <strong>EMI Amount:</strong> {loan.emiAmount}
            <br />
            <strong>Start Date:</strong> {new Date(loan.startDate).toLocaleDateString()}
            <br />
            <strong>Duration:</strong> {loan.duration} months
            <br />
            <strong>Request Flag:</strong> {loan.requestFlag ? 'True' : 'False'}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoanList;
