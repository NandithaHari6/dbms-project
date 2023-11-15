import React,{useEffect, useState} from "react";
import useForm from "./useForm";

const SignupForm=({submitForm})=>{
    
    const {handleChange,handleFormSubmit,values,errors}=useForm(submitForm);

    return(
        <div className="right-content">

                <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Welcome to Aspire Bank Corp.</h2>
                    
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label" >Username</label>
                        <input
                         className="input"
                          type="text" 
                          name="customerName"
                          value={values.customerName}
                          onChange={handleChange}
                          />
                          {errors.customerName && <p className="error">{errors.customerName}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                        className="input" 
                        type="email"
                         name="email" 
                         value={values.email}
                         onChange={handleChange}
                         />
                         {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input
                         className="input" 
                         type="password" 
                         name="customerPassword"
                          value={values.customerPassword}
                          onChange={handleChange}
                          />
                          {errors.customerPassword && <p className="error">{errors.customerPassword}</p>}             
                             </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="customer" checked={true}/>
                            Customer
                        </label>
                        <span className="radio-spacing"></span>
                        <label>    
                            <input type="radio" value="bankmanager" />
                            Bank Manager
                        </label>                                               
                    </div>
                    <div className="button-container">
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign In</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
    )

}
export default SignupForm;