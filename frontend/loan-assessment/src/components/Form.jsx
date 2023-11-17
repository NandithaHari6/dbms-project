import SignupForm from "./SignupForm";
import React ,{useState}from "react";
//import SignupFormSuccess from "./SignupFormSuccess";
import Customer from "../views/Customer";
import BankManager from "../views/BankManager";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

const Form=()=>{
    const[formIsSubmitted,setFormIsSubmitted]=useState(false);
    const[user,setUser]=useState("");
    const submitForm=(user)=>{
       setFormIsSubmitted(true); 
       setUser(user);
    }
    // async function getCustomer(){
    //   const res =await fetch(`http://localhost:5000/customer/getPersonalDetails5000`);
    //   const data =await res.json();
    //   console.log(data)
    // }
    return(<div>

   
         
          { (!formIsSubmitted)? <SignupForm submitForm={submitForm}/> : (
           user === "customer" ? <Customer />
          : <BankManager />
          ) }
            
            
          
          {console.log(user)}
       
         </div>
        
    )
}
export default Form;