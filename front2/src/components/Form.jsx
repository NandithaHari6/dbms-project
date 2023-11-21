import SignupForm from "./SignupForm";
import React ,{useState}from "react";
import SignupFormSuccess from "./SignupFotmSuccess";

const Form=()=>{
    const[formIsSubmitted,setFormIsSubmitted]=useState(false);
  const [user,setUser] = useState("");
    const submitForm=(user)=>{
       setFormIsSubmitted(true); 
       setUser(user);
    }
    return(
        <div>
          { !formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <SignupFormSuccess  submitForm={submitForm}/> } 
        </div>
    )
}
export default Form;