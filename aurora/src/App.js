import React, {Fragment} from "react";
import "./App.css";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { HomePage } from './components/HomePage';
//import image-2 from "~/src/img/image-2.png";

//:~/src/img/image-2.png"


export const App = () => {
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