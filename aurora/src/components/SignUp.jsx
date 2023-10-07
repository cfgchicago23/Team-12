import React, { useState } from "react";

export function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    address: "",
    dateOfBirth: "",
    areasOfExpertise: [],
  });

  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData((prevState) => ({
      ...prevState,
      areasOfExpertise: selectedOptions,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    try {
      const response = await fetch("http://127.0.0.1:5000/volunteer/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  };

  return (
    <div className="sign-up-container">
      <button onClick={toggleLanguage}>
        {isSpanish ? "Switch to English" : "Cambiar a Español"}
      </button>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>{isSpanish ? "Registrarse" : "Sign Up"}</h1>
        <label htmlFor="firstName">
          {isSpanish ? "Nombre:" : "First name:"}
        </label>
        <input
          value={formData.firstName}
          name="firstName"
          id="firstName"
          placeholder={isSpanish ? "Tu nombre" : "Your first name"}
          onChange={handleChange}
        />

        <label htmlFor="lastName">
          {isSpanish ? "Apellido:" : "Last name:"}
        </label>
        <input
          value={formData.lastName}
          name="lastName"
          id="lastName"
          placeholder={isSpanish ? "Tu apellido" : "Your last name"}
          onChange={handleChange}
        />

        <label htmlFor="email">
          {isSpanish ? "Correo Electrónico:" : "E-mail:"}
        </label>
        <input
          value={formData.email}
          name="email"
          id="email"
          placeholder={
            isSpanish ? "youremail@gmail.com" : "youremail@gmail.com"
          }
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">
          {isSpanish ? "Teléfono:" : "Phone:"}
        </label>
        <input
          value={formData.phoneNumber}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder={isSpanish ? "(XXX)-XXX-XXXX" : "(XXX)-XXX-XXXX"}
          onChange={handleChange}
        />

        <label htmlFor="country">{isSpanish ? "País:" : "Country:"}</label>
        <input
          value={formData.country}
          name="country"
          id="country"
          placeholder={
            isSpanish ? "Estados Unidos de América" : "United States of America"
          }
          onChange={handleChange}
        />

        <label htmlFor="address">
          {isSpanish ? "Dirección:" : "Address:"}
        </label>
        <input
          value={formData.address}
          name="address"
          id="address"
          placeholder={isSpanish ? "Tu dirección" : "Your address"}
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">
          {isSpanish ? "Fecha de Nacimiento:" : "Date of Birth:"}
        </label>
        <input
          value={formData.dateOfBirth}
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          placeholder={
            isSpanish ? "MM-DD-YYYY" : "MM-DD-YYYY"
          }
          onChange={handleChange}
        />

        <label htmlFor="areasOfExpertise">
          {isSpanish ? "Áreas de Experiencia:" : "Areas of Expertise:"}
        </label>
        <select
          value={formData.areasOfExpertise}
          id="areasOfExpertise"
          name="areasOfExpertise"
          multiple
          onChange={handleSelectChange}
        >
          <option value="general">
            {isSpanish ? "Voluntario General" : "General Volunteer"}
          </option>
          <option value="carpentry">
            {isSpanish ? "Carpintería" : "Carpentry"}
          </option>
          <option value="windows">
            {isSpanish ? "Reemplazo de Ventanas" : "Window Replacement"}
          </option>
          <option value="drywall">
            {isSpanish ? "Trabajo de Yeso/Pared" : "Drywall/Plaster work"}
          </option>
          <option value="flooring">{isSpanish ? "Pisos" : "Flooring"}</option>
          <option value="painting">{isSpanish ? "Pintura" : "Painting"}</option>
          <option value="hvac">{isSpanish ? "HVAC" : "HVAC"}</option>
          <option value="plumbing">{isSpanish ? "Plomería" : "Plumbing"}</option>
          <option value="electrical">{isSpanish ? "Eléctrico" : "Electrical"}</option>
          <option value="landscaping">{isSpanish ? "Paisajismo" : "Landscaping"}</option>
        </select>

        <button type="submit">{isSpanish ? "Registrarse" : "Sign Up"}</button>
      </form>
    </div>
  );
}
