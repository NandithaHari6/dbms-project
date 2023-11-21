import React,{useEffect, useState} from "react";
import useForm from "./useForm";
import { Navigate,Link } from "react-router-dom";
import './SignupForm.css'
import './bank5.jpg'
import usericon from './person.png'
import passwordicon from './password.png'

const SignupForm=({submitForm})=>{
    
    const {handleChange,handleFormSubmit,values,errors}=useForm(submitForm);
    const [selectedRole, setSelectedRole] = useState('customer');
    const handleRadioChange = (event) => {
    setSelectedRole(event.target.value);
    };        
     
    const handleSignupClick = async(event) => {
        // Perform any signup logic here
        // Then, navigate to the registration page
     console.log("Signup button clicked");
      return <Navigate to="/registration" />
    };  
  

    return(
        <div className="right-content">

                <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Welcome to Aspire Bank Corp.</h2>
                    
                </div>
                <form className="form-wrapper">
                    <div className="name">
                    <img src={usericon} alt=""/>
                        <label className="label">Username </label>
                        <input
                         className="input"
                          type="text" 
                          name="customerId" 
                          value={values.customerId}
                          onChange={handleChange}
                          />
                          {/* {errors.fullname && <p className="error">{errors.fullname}</p>} */}
                    </div>
                    
                    <div className="password">
                    <img src={passwordicon} alt="" />
                        <label className="label">Password</label>
                        <input
                         className="input" 
                         type="password" 
                         name="customerPassword"
                          value={values.customerPassword}
                          onChange={handleChange}
                          />
                          {/* {errors.password && <p className="error">{errors.password}</p>}              */}
                             </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="customer" name="userType" checked={selectedRole === 'customer'} onChange={handleRadioChange}/>
                            Customer
                        </label>
                        <span className="radio-spacing"></span>
                        <label>    
                            <input type="radio" value="bankmanager"  name="userType" checked={selectedRole === 'bankmanager'}
                              onChange={handleRadioChange}/>
                            Bank Manager
                        </label>                                               
                    </div>
                    <div className="button-container">
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign In
                        </button>
                        <Link to="/registration">
                        <button className="submit" onClick={handleSignupClick}  >
                           Sign Up
                        </button>
                        </Link>
                        
                    </div>
                </form>
                
            </div>
        </div>
        </div>
        
    );
    }

export default SignupForm;