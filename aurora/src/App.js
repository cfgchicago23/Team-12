import React from "react";
import "./App.css";
//mport {Link} from "react-router-dom";
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
            <img className="image" alt="Image" src="/image-2.png" />
        </div>
       
       

        <div className="frame">
          <div className="text-wrapper-2">
              <button onclick = "window.location.href = 'signup.html';">Sign Up</button>
              <button onclick = "window.location.href = 'houses.html';">Houses</button>
          </div>
        </div>


        

        
       

        <div className="overlap-2">
          <div className="frame-2" />
          <a href="https://www.paypal.com/donate?hosted_button_id=NTF9LK8XJTCGG">
            <img className="donate" alt="Donate" src="donate.png" />
          </a>
        </div>
        <img className="img" alt="Image" src="/image-3.png" />
        <img className="image-2" alt="Image" src="/image-4.png" />
      </div>
    </div>
  );
};
export default App;