import React from "react";
import "./App.css";

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
          <img className="image" alt="Image" src="img/image-2.png" />
        </div>
        <div className="frame">
          <div className="text-wrapper-2">
            <a href="signup.html">
              <button>Sign Up</button>
            </a>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-2" />
          <a href="donate.html">
            <img className="donate" alt="Donate" src="donate.png" />
          </a>
        </div>
        <img className="img" alt="Image" src="img/image-3.png" />
        <img className="image-2" alt="Image" src="img/image-4.png" />
      </div>
    </div>
  );
};
export default App;