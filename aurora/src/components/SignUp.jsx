import React, {useState} from "react"
import {Form} from "react-bootstrap"

export function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        address: "",
        dateOfBirth: "",
        areasOfExpertise: []
    });

    const handleSelectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(
          option => option.value
        );
        setFormData(prevState => ({
          ...prevState,
          selectedFruits: selectedOptions,
        }));
      };

    return (
        <div className="sign-up-container">
            <form className="sign-up-form">
                <h1>Sign Up</h1>
                <label htmlFor="firstName">First name:</label>
                <input value={formData.firstName} name="firstName" id="firstName" placeholder="Your first name" onChange={(e) => setFormData({...formData, firstName: formData.firstName})}/>

                <label htmlFor="lastName"> Last name:</label>
                <input value={formData.lastName} name="lastName" id="lastName" placeholder="Your last name" onChange={(e) => setFormData({...formData, lastName: formData.lastName})}/>

                <label htmlFor="email">E-mail:</label>
                <input value={formData.email} name="email" id="email" placeholder="youremail@gmail.com" onChange={(e) => setFormData({...formData, email: formData.email})}/>

                <label htmlFor="phoneNumber">Phone:</label>
                <input value={formData.phoneNumber} name="phoneNumber" id="phoneNumber" placeholder="(XXX)-XXX-XXXX" onChange={(e) => setFormData({...formData, phoneNumber: formData.phoneNumber})}/>

                <label htmlFor="country">Country:</label>
                <input value={formData.country} name="country" id="country" placeholder="United States of America" onChange={(e) => setFormData({...formData, country: formData.country})}/>

                <label htmlFor="address">Address:</label>
                <input value={formData.address} name="address" id="address" placeholder="Your address" onChange={(e) => setFormData({...formData, address: formData.address})}/>

                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input value={formData.dateOfBirth} type="date" name="dateOfBirth" id="dateOfBirth" placeholder="MM-DD-YYYY" onChange={(e) => setFormData({...formData, country: formData.dateOfBirth})}/>

                <label for="areasOfExpertise">Choose a fruit:</label>
                <select value={formData.areasOfExpertise} id="areasOfExpertise" name="areasOfExpertise" multiple onChange={handleSelectChange}>
                <option value="general">General Volunteer</option>
                <option value="carpentry">Carpentry</option>
                <option value="windows">Window Replacement</option>
                <option value="drywall">Drywall/ Plaster work</option>
                <option value="flooring">Flooring</option>
                <option value="painting">Painting</option>
                <option value="hvac">HVAC</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="landscaping">Landscaping</option>
                </select>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );    
}