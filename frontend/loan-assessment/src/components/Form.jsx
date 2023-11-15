import SignupForm from "./SignupForm";
import React ,{useState}from "react";
//import SignupFormSuccess from "./SignupFormSuccess";


const Form=()=>{
    const[formIsSubmitted,setFormIsSubmitted]=useState(false);

    const submitForm=()=>{
       setFormIsSubmitted(true); 
    }
    return(
        <div>
          { !formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <SignupFormSuccess/>}  
        </div>
    )
}
export default Form;