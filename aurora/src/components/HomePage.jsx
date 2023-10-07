import React from "react"
import {Link} from "react-router-dom";
import RTALogo from "../img/RTAlogo.jpeg";
import TwitterIcon from "../img/TwitterIcon.png";

export function HomePage() {
  return (
    <div className="desktop">
      <div className="div">
        <div className="header">
          <div class="logo-container">
            <img src={RTALogo} className="company-logo" alt="Company Logo" />
          </div>
          <div className="title">
          Together we repair homes, revitalize communities and rebuild lives.
          </div>
        </div>
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
        <div className="buttons-1" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Link to="/signup">
              <button className="link-button">Sign Up</button>
          </Link>
          <Link to="/application-form">
              <button className="link-button">Houses</button>
          </Link>
          <button className="link-button" href="https://www.paypal.com/donate?hosted_button_id=NTF9LK8XJTCGG">Donate</button>
        </div>
        <div className="buttons-2" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Link to="/admin-login">
              <button className="link-button">Admin Login</button>
          </Link>
        </div>
        <div className="buttons-3" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false">
              <img className="twitter-share-button" src={TwitterIcon} alt="Tweet" />
          </a>
        </div>
        <img className="img" alt="Image" src="image-3.png" />
        <img className="image-2" alt="Image" src="image-4.png" />
        
      </div>
    </div>
  );
}