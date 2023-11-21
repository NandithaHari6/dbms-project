
import React from "react";
import useForm from "./useForm";
import { useNavigate ,Link} from "react-router-dom";
import './RegistrationForm.css';

const RegistrationForm = ({ submitForm }) => {
  //const navigate = useNavigate();
  const { handleChange, handleRegFormSubmit, values, errors } = useForm(submitForm);

  //const handleRegistration = () => {
       // navigate("/");
  //};
  
  return (
    <div className="regcontainer">
    <div className="registration-form">
      <h2 className="regtitle">Register Account!  </h2>
      <form className="form-wrapper">
      <div className="form-group">
          <label htmlFor="custid" className="reglabel">
            Customer ID
          </label>
          <input
            className="input"
            type="number"
            name="customerId"
            value={values.customerId}
            onChange={handleChange}
          />
          {/* {errors.id && <p className="error">{errors.id}</p>} */}
        </div>
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Full Name
          </label>
          <input
            className="input"
            type="text"
            name="customerName"
            value={values.customerName}
            onChange={handleChange}
          />
          {/* {errors.fullname && <p className="error">{errors.fullname}</p>} */}
        </div>

        {/* <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className="input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div> */}

        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="customerPassword"
            value={values.customerPassword}
            onChange={handleChange}
          />
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
        </div>
        <div className="form-group">
          <label htmlFor="dob" className="label">
            Date Of Birth
          </label>
          <input
            className="input"
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label">
            Address 
          </label>
          <input
            className="input"
            type="textarea"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="street"className="label">
            Street
          </label>
          <input
            className="input"
            type="text"
            name="street"
            value={values.street}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="label">
           City
          </label>
          <input
            className="input"
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode" className="label">
            Pincode
          </label>
          <input
            className="input"
            type="number"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country" className="label">
            Country
          </label>
          <input
            className="input"
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
          /> </div>*/}
        
        <div className="form-group">
          <label htmlFor="phonenum" className="label">
            Contact Number 
          </label>
          <input
            className="input"
            type="number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nominee" className="label">
            Nominee
          </label>
          <input
            className="input"
            type="text"
            name="nominee"
            value={values.nominee}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reln" className="label">
            Relation with Nominee
          </label>
          <input
            className="input"
            type="text"
            name="relation"
            value={values.relationn}
            onChange={handleChange}
          />
        </div>
        <div className="radio">
                        <label>
                            <input type="radio" value="option1" name="selectedBank" onChange={handleChange}/>
                           icici
                        </label>
                        <span className="radio-spacing"></span>
                        <label>    
                            <input type="radio" value="option2" name="selectedBank"  
                              onChange={handleChange}/>
                            hdfc
                        </label>                                               
                    </div>

        <div className="button-container">
          <button className="submit" onClick={handleRegFormSubmit}>
            Register
          </button>
          <Link to="/"className="link-to-main-page">
            Go to Main Page
          </Link>
        </div>
        
        
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
