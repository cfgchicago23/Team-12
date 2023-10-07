import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

export function AdminLogin() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    const credentials = {
        username: userName,
        password: password
    };
  
    try {
        const response = await fetch('http://localhost:5000/authenticate', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await response.json();

        if(data.authenticated) {
            setAuthenticated(true);
        } else {
            setWarning("Wrong password, try again ;(");
        }
        console.log(data);

    } catch (error) {
    console.error('There was an error!', error);
    }
  }

    if(authenticated) {
        return <Navigate to="/dashboard" />;
    };

  return (
    <div className="sign-up-container">
      <div className="content-wrapper">
      <button className="language-toggle-button" onClick={toggleLanguage}>
          {isSpanish ? "Switch to English" : "Cambiar a Español"}
        </button>

      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h1>{isSpanish ? "Inicio de Sesión de Administrador" : "Admin Login"}</h1>
        <label htmlFor="userName">
          {isSpanish ? "Nombre de Usuario:" : "Username:"}
        </label>
        <input
          value={userName}
          name="usertName"
          id="userName"
          placeholder={isSpanish ? "Ingrese su nombre de usuario" : "Enter your username"}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">
          {isSpanish ? "Contraseña:" : "Password:"}
        </label>
        <input
          value={password}
          name="password"
          type="password"
          id="password"
          placeholder={isSpanish ? "Ingresa tu contraseña" : "Enter your password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        
        <button type="submit">{isSpanish ? "Acceso" : "Login"}</button>
        {warning && <p>{warning}</p>}
      </form>
    </div>
    </div>
  );
}
