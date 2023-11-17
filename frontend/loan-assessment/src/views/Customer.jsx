
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./Nav.jsx";
import Profile from "./Profile.jsx";
import LoanDetails from "./LoanDetails.jsx";
import Grievance from "./Grievance.jsx";

function Customer() {
  
  return (
    <Router>
      <Nav />
        <Routes >
          <Route path="/profile" element={<Profile />} />
          <Route path="/loandetails" element={<LoanDetails />} />
          <Route path="/grievance" element={<Grievance /> } />

        </Routes>
        

    </Router>
  )
}

export default Customer;
