import React, { useState } from 'react';

function LoanApplicationForm() {
  const [loanData, setLoanData] = useState({
    customerId: " ",
    loanAmount: "",
    loanType: "",
    bankId: ' ',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dbms-backend-82cd.onrender.com/loan/addLoan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData),
      });

      if (response.ok) {
        console.log('Loan application submitted successfully');
        // You may want to redirect or show a success message
      } else {
        console.error('Failed to submit loan application');
        // Handle error - show an error message or redirect as needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
      <label>
         Customer id:
          <input
            type="number"
            name="customerId"
            value={loanData.customerId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         loan Amount
          <input
            type="number"
            name="loanAmount"
            value={loanData.loanAmount}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         Bank id:
          <input
            
            name="bankId"
            value={loanData.bankId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Loan Type:
          <select name="loanType" value={loanData.loanType} onChange={handleInputChange}>
            <option value="home">Home Loan</option>
            <option value="personal">Personal Loan</option>
            {/* Add other loan types as needed */}
          </select>
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default LoanApplicationForm;