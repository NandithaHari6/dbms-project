
import React from "react";
import useForm from "./useForm";
import { useNavigate ,Link} from "react-router-dom";
import './RegistrationForm.css';

const RegistrationForm = ({ submitForm }) => {
  //const navigate = useNavigate();
  const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

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
            name="fullname"
            value={values.id}
            onChange={handleChange}
          />
          {errors.id && <p className="error">{errors.id}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Full Name
          </label>
          <input
            className="input"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
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
            Address :House name
          </label>
          <input
            className="input"
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenum" className="label">
            Contact Number 
          </label>
          <input
            className="input"
            type="number"
            name="phonenum"
            value={values.phonenum}
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
            name="reln"
            value={values.reln}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button className="submit" onClick={handleFormSubmit}>
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
