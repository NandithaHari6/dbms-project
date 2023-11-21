import React from 'react';

import useForm from "./useForm";
import CustomerPage from "../comp/CustomerPage";
import BankPage from "../comp/BankPage";
const SignupFormSuccess=({submitForm})=>{
    const { handleChange, handleRegFormSubmit, values, errors } = useForm(submitForm);
    return(
        <div  >
            <div >
                <h1 className="form-success">Account Created!</h1>
                {values.userType==="customer"? <CustomerPage />:<BankPage />}
            </div>
        </div>
          )
}
export default SignupFormSuccess;