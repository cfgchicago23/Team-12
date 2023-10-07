import React from "react";
import "./App.css";

 import {
   BrowserRouter as Router, 
   Routes, 
   Route
 } from 'react-router-dom';
 import { SignUp } from './components/SignUp';
 import { HomePage } from './components/HomePage';

import {Link} from "react-router-dom";


//:~/src/img/image-2.png"


export const App = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;