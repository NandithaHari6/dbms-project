import SignupForm from "./SignupForm";
import React ,{useState}from "react";
//import SignupFormSuccess from "./SignupFormSuccess";
import Customer from "../views/Customer";
import BankManager from "../views/BankManager";


const Form=()=>{
    const[formIsSubmitted,setFormIsSubmitted]=useState(false);
    const[user,setUser]=useState("");
    const submitForm=(user)=>{
       setFormIsSubmitted(true); 
       setUser(user);
    }
    return(
        <div>
         
          { !formIsSubmitted ? <SignupForm submitForm={submitForm}/> : (
           user === "customer" ? <Customer />
          : <BankManager />
          )
            
            
          }
          {console.log(user)}
        </div>
    )
}
export default Form;