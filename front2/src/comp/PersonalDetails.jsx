import React, { useState } from 'react';
import useForm from "../components/useForm.jsx";
function PersonalDetails() {
  const [customerId, setCustomerId] = useState('');
  const [personalDetails, setPersonalDetails] = useState(null);
  const [error, setError] = useState(null);
  const {  values} = useForm();
  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleFetchPersonalDetails = async () => {
    try {
      
      const response = await fetch(`https://dbms-backend-82cd.onrender.com/customer/getPersonalDetails${customerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch personal details');
      }

      const data = await response.json();
      console.log(data);
      setPersonalDetails(data[0]); 

      // Assuming the response is an array with a single object
      setError(null);
    } catch (error) {
      console.error(error);
      setPersonalDetails(null);
      setError('Failed to fetch personal details. Please check the customer ID.');
    }
  };

  return (
    <div className="App">
      <h2>Personal Details</h2>
      <div>
        <label>
          Customer ID:
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
        </label>
        <button onClick={handleFetchPersonalDetails}>Fetch Personal Details</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {personalDetails && (
        <div>
          <p>
            <strong>Customer Name:</strong> {personalDetails.customerName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {new Date(personalDetails.dob).toLocaleDateString()}
          </p>
          <p>
            <strong>Address:</strong> {personalDetails.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {personalDetails.phoneNumber}
          </p>
          <p>
            <strong>Nominee:</strong> {personalDetails.nominee}
          </p>
          <p>
            <strong>Relation:</strong> {personalDetails.relation}
          </p>
          <p>
            <strong>CIBIL Score:</strong> {personalDetails.cibilScore}
          </p>
          <p>
            <strong>Bank ID:</strong> {personalDetails.bankId}
          </p>
          <p>
            <strong>Account Number:</strong> {personalDetails.accountNumber}
          </p>
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;