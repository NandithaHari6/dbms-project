import React,{useEffect, useState} from "react";
import validation from "./validation";



const useForm=(submitForm)=>{


const[values,setValues]=useState({
    customerId:"",
    customerName:"",
   
    customerPassword:"",
    dob:"",
    address:"",
 phoneNumber:"",
    nominee:"",
    relation:"",    
    selectedBank:"",
    userType:"customer"
});
// const [loginValues,setLoginValues]=useState({
//     customerId:"",
//     customerPassword:""
// });
const[errors,setErrors] = useState({});
const[dataIsCorrect,setDataIsCorrect]=useState(false);
const handleRegFormSubmit=async(event)=>{
  event.preventDefault();
  try {
  console.log(values)
      const response = await fetch('https://dbms-backend-82cd.onrender.com/customer/addCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
     
     const data= await response.json();
      console.log(data);
      if (response.status==201) { 
         console.log('Form submitted successfully');
        //  submitForm(values.userType);
      } else{
     
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  setErrors(validation(values));
  setDataIsCorrect(true);
}
const handleChange=(event)=>{
    setValues({
        ...values,
        [event.target.name]:event.target.value,
    });

};
const handleFormSubmit=async(event)=>{
  event.preventDefault();
  try {
  console.log(values)
      const response = await fetch('https://dbms-backend-82cd.onrender.com/login', {
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
     
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  setErrors(validation(values));
  setDataIsCorrect(true);
};
// const handleLoginFormSubmit=(e)=>{
// e.preventDefault();

// setErrors(validation(values));
//     setDataIsCorrect(true);
// }

// useEffect(()=>{
//     if(Object.keys(errors).length===0 && dataIsCorrect){
//         submitForm(true);
//     }
// },[errors]);

return{handleChange,handleFormSubmit,handleRegFormSubmit,errors,values};
}

export default useForm;