import React, {Fragment} from "react";
import "./App.css";
<<<<<<< HEAD
//mport {Link} from "react-router-dom";
=======
//import {Link} from "react-router-dom";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { HomePage } from './components/HomePage';
>>>>>>> db59c78b02cfa7c5487b6e2f96fa9e45d912560e
//import image-2 from "~/src/img/image-2.png";

//:~/src/img/image-2.png"


export const App = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="overlap-group">
          <p className="text-wrapper">
            Rebuilding Together Aurora is a nonprofit organization that focuses on providing critical home repairs, home
            safety modifications, and energy efficiency upgrades to homeowners in need. Their mission is to create safe
            and healthy housing for individuals and families who may be low-income, senior citizens, military veterans,
            people living with disabilities, or families with young children living in unsafe conditions.
          </p>
        </div>
        <div className="overlap">
          <div className="ellipse" />
            <img className="image" alt="Image" src="image-2.png" />
        </div>
<<<<<<< HEAD
       
       

        <div className="frame">
          <div className="text-wrapper-2">
              <button onclick = "window.location.href = 'signup.html';">Sign Up</button>
              <button onclick = "window.location.href = 'houses.html';">Houses</button>
=======
        <div className="frame">
          <div className="text-wrapper-2">
            <a href="volunteer.html">
              <button>Sign Up</button>
            </a>
>>>>>>> db59c78b02cfa7c5487b6e2f96fa9e45d912560e
          </div>
        </div>


        

        
       

        <div className="overlap-2">
          <div className="frame-2" />
          <a href="https://www.paypal.com/donate?hosted_button_id=NTF9LK8XJTCGG">
            <img className="donate" alt="Donate" src="donate.png" />
          </a>
        </div>
        <img className="img" alt="Image" src="image-3.png" />
        <img className="image-2" alt="Image" src="image-4.png" />
      </div>
  <Router>
    <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  </Router>
};
export default App;