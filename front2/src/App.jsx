import React from "react";
import './App.css';
import Form from "./components/Form";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Routes,Route,Link  } from "react-router-dom";
import SignupForm from "./components/SignupForm";


function App() {
  return (
    
    <Router>
           <div>
              <Routes>
              <Route path="/signup" element={<SignupForm />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="*" element={<div>
                  <Form/>
                  </div>} />
                 </Routes>
                 </div>
                 
       </Router>
   
  
      );
}

export default App;
