import React,{useEffect, useState} from "react";
import validation from "./validation";

import BankManager from "../views/BankManager";
;const useForm=(submitForm)=>{
const[values,setValues]=useState({
    customerId:"",
    customerPassword:"",
    userType:""
    
});

const[errors,setErrors] = useState({});
const[dataIsCorrect,setDataIsCorrect]=useState(false);

const handleChange=(event)=>{
    setValues({
        ...values,
        [event.target.name]:event.target.value,
    });

};
const handleFormSubmit=async(event)=>{
    event.preventDefault();
    try {
    
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
       
       const data= await response.json();
        console.log(data);
        if (data.msg === "success") { 
           console.log('Form submitted successfully');
           submitForm(values.userType);
        } else{
          <Error />
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    setErrors(validation(values));
    setDataIsCorrect(true);
};

useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect){
        submitForm(true);
    }
},[errors]);

return{handleChange,handleFormSubmit,errors,values};
}

export default useForm;