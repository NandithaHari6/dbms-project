// src/LoansByBank.js
import React, { useState } from 'react';
import LoanList from './LoanList';

function LoansByBank() {
  const [bankId, setBankId] = useState('');
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);

  const handleBankIdChange = (e) => {
    setBankId(e.target.value);
  };

  const handleFetchLoans = async () => {
    try {
      const response = await fetch(`https://dbms-backend-82cd.onrender.com/loan/getAllLoans${bankId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch loan details');
      }

      const data = await response.json();
      console.log(data);
      setLoans(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setLoans([]);
      setError('Failed to fetch loan details. Please check the bank ID.');
    }
  };

  return (
    <div className="App">
      <h2>Loans by Bank</h2>
      <div>
        <label>
          Bank ID:
          <input type="text" value={bankId} onChange={handleBankIdChange} />
        </label>
        <button onClick={handleFetchLoans}>Fetch Loans</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loans.length > 0 && <LoanList loans={loans} />}
    </div>
  );
}

export default LoansByBank;
