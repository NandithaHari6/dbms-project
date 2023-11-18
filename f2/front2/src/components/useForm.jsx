import React,{useEffect, useState} from "react";
import validation from "./validation";



const useForm=(submitForm)=>{


const[values,setValues]=useState({
    customerId:"",
    customerName:"",
    email:"",
    customerPassword:"",
    dob:"",
    address:"",
 phoneNumber:"",
    nominee:"",
    relation:"",    
});
// const [loginValues,setLoginValues]=useState({
//     customerId:"",
//     customerPassword:""
// });
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
          body: JSON.stringify({
           customerId,
            customerPassword,
            selectedRole
           
          })
        });
  
        const data = await response.json();
       
        console.log("sucess");
      } catch (error) {
        console.error(error);
        
      }
    setErrors(validation(values));
    setDataIsCorrect(true);
};
const handleLoginFormSubmit=(e)=>{
e.preventDefault();

setErrors(validation(values));
    setDataIsCorrect(true);
}

useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect){
        submitForm(true);
    }
},[errors]);

return{handleChange,handleFormSubmit,errors,values};
}

export default useForm;