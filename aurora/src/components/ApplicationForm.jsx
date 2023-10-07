import React, { useState } from "react";

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    streetAddress: "",
    phone: "",
    alternatePhone: "",
    primaryContact: "",
    relationship: "",
    contactPhone: "",
    birthdate: "",
    age: "",
    sex: "",
    disabled: "",
    zipCode: "",
    maritalStatus: "",
    race: "",
    ethnicity: "",
    moveYear: "",
    ownHome: "",
    mortgage: "",
    paymentsUpToDate: "",
    onlyResidence: "",
    renters: "",
    citation: "",
    appliedBefore: "",
  });

  const [isSpanish, setIsSpanish] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic...
  };

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <div className="sign-up-container">
       <div className="content-wrapper">
                <button className="language-toggle-button" onClick={toggleLanguage}>
                    {isSpanish ? "Switch to English" : "Cambiar a Español"}
                </button>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>{isSpanish ? "Solicitud" : "Application"}</h1>

        <label htmlFor="applicantName">{isSpanish ? "Nombre del Solicitante" : "Name of Applicant"}:</label>
        <input
          value={formData.applicantName}
          name="applicantName"
          id="applicantName"
          placeholder={isSpanish ? "Nombre Completo" : "Full Name"}
          onChange={handleChange}
        />

        <label htmlFor="streetAddress">{isSpanish ? "Dirección" : "Street Address"}:</label>
        <input
          value={formData.streetAddress}
          name="streetAddress"
          id="streetAddress"
          placeholder={isSpanish ? "Dirección" : "Street Address"}
          onChange={handleChange}
        />

        <label htmlFor="phone">{isSpanish ? "Número de Teléfono" : "Phone #"}:</label>
        <input
          value={formData.phone}
          type="tel"
          name="phone"
          id="phone"
          placeholder={isSpanish ? "(XXX)-XXX-XXXX" : "(XXX)-XXX-XXXX"}
          onChange={handleChange}
        />

        <label htmlFor="alternatePhone">{isSpanish ? "Teléfono Alternativo" : "Alternate Phone #"}:</label>
        <input
          value={formData.alternatePhone}
          type="tel"
          name="alternatePhone"
          id="alternatePhone"
          placeholder={isSpanish ? "(XXX)-XXX-XXXX" : "(XXX)-XXX-XXXX"}
          onChange={handleChange}
        />

        <label htmlFor="primaryContact">{isSpanish ? "Contacto Principal (si no es el propietario)" : "Primary Contact (if not homeowner)"}:</label>
        <input
          value={formData.primaryContact}
          name="primaryContact"
          id="primaryContact"
          placeholder={isSpanish ? "Nombre de Contacto" : "Contact Name"}
          onChange={handleChange}
        />

        <label htmlFor="relationship">{isSpanish ? "Relación" : "Relationship"}:</label>
        <input
          value={formData.relationship}
          name="relationship"
          id="relationship"
          placeholder={isSpanish ? "Relación" : "Relationship"}
          onChange={handleChange}
        />

        <label htmlFor="contactPhone">{isSpanish ? "Teléfono de Contacto" : "Contact Phone #"}:</label>
        <input
          value={formData.contactPhone}
          type="tel"
          name="contactPhone"
          id="contactPhone"
          placeholder={isSpanish ? "(XXX)-XXX-XXXX" : "(XXX)-XXX-XXXX"}
          onChange={handleChange}
        />

        <label htmlFor="birthdate">{isSpanish ? "Fecha de Nacimiento" : "Date of Birth"}:</label>
        <input
          value={formData.birthdate}
          type="date"
          name="birthdate"
          id="birthdate"
          onChange={handleChange}
        />

        <label htmlFor="age">{isSpanish ? "Edad" : "Age"}:</label>
        <input
          value={formData.age}
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
        />

        <label htmlFor="sex">{isSpanish ? "Género" : "Sex"}:</label>
        <div>
          <input type="radio" id="male" name="sex" value={isSpanish ? "Masculino" : "Male"} onChange={handleChange} />
          <label htmlFor="male">{isSpanish ? "Masculino" : "Male"}</label>

          <input type="radio" id="female" name="sex" value={isSpanish ? "Femenino" : "Female"} onChange={handleChange} />
          <label htmlFor="female">{isSpanish ? "Femenino" : "Female"}</label>
        </div>

        <label htmlFor="maritalStatus">{isSpanish ? "Estado Civil" : "Marital Status"}:</label>
        <div>
          <input type="radio" id="married" name="maritalStatus" value={isSpanish ? "Casado" : "Married"} onChange={handleChange} />
          <label htmlFor="married">{isSpanish ? "Casado" : "Married"}</label>
          
          <input type="radio" id="single" name="maritalStatus" value={isSpanish ? "Soltero" : "Single/never married"} onChange={handleChange} />
          <label htmlFor="single">{isSpanish ? "Soltero" : "Single/Never married"}</label>
          
          <input type="radio" id="living" name="maritalStatus" value={isSpanish ? "Conviviendo con pareja" : "Living with partner"} onChange={handleChange} />
          <label htmlFor="living">{isSpanish ? "Conviviendo con pareja" : "Living with partner"}</label>
          
          <input type="radio" id="divorced" name="maritalStatus" value={isSpanish ? "Divorciado/Separado" : "Divorced/Separated"} onChange={handleChange} />
          <label htmlFor="divorced">{isSpanish ? "Divorciado/Separado" : "Divorced/Separated"}</label>
          
          <input type="radio" id="widowed" name="maritalStatus" value={isSpanish ? "Viudo" : "Widowed"} onChange={handleChange} />
          <label htmlFor="widowed">{isSpanish ? "Viudo" : "Widowed"}</label>
        </div>

        <label htmlFor="disabled">{isSpanish ? "Discapacitado" : "Disabled"}:</label>
        <div>
          <input type="radio" id="yes" name="disabled" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="disabled" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="zipCode">{isSpanish ? "Código Postal" : "Zip code"}:</label>
        <input
          value={formData.zipCode}
          name="zipCode"
          id="zipCode"
          onChange={handleChange}
        />

        <label htmlFor="race">{isSpanish ? "Raza/Etnicidad" : "Race/Ethnicity"}:</label>
        <div>
          <input type="radio" id="hispanic" name="race" value={isSpanish ? "Hispano/Latino" : "Hispanic/Latino"} onChange={handleChange} />
          <label htmlFor="hispanic">{isSpanish ? "Hispano/Latino" : "Hispanic/Latino"}</label>
          
          <input type="radio" id="black" name="race" value={isSpanish ? "Negro/Afroamericano" : "Black/African American"} onChange={handleChange} />
          <label htmlFor="black">{isSpanish ? "Negro/Afroamericano" : "Black/African American"}</label>
          
          <input type="radio" id="asian" name="race" value={isSpanish ? "Asiático" : "Asian"} onChange={handleChange} />
          <label htmlFor="asian">{isSpanish ? "Asiático" : "Asian"}</label>
          
          <input type="radio" id="americanIndian" name="race" value={isSpanish ? "Indio Americano/ Nativo de Alaska" : "American Indian/Alaskan Native"} onChange={handleChange} />
          <label htmlFor="americanIndian">{isSpanish ? "Indio Americano/ Nativo de Alaska" : "American Indian/Alaskan Native"}</label>
          
          <input type="radio" id="pacific" name="race" value={isSpanish ? "Isleño del Pacífico" : "Pacific Islander"} onChange={handleChange} />
          <label htmlFor="pacific">{isSpanish ? "Isleño del Pacífico" : "Pacific Islander"}</label>
          
          <input type="radio" id="white" name="race" value={isSpanish ? "Blanco/Caucásico" : "White/Caucasian"} onChange={handleChange} />
          <label htmlFor="white">{isSpanish ? "Blanco/Caucásico" : "White/Caucasian"}</label>
        </div>

        <label htmlFor="ethnicity">{isSpanish ? "Etnicidad" : "Ethnicity"}:</label>
        <input
          value={formData.ethnicity}
          name="ethnicity"
          id="ethnicity"
          onChange={handleChange}
        />

        <label htmlFor="moveYear">{isSpanish ? "¿En qué año te mudaste a tu hogar?" : "What year did you move into your home?"}</label>
        <input
          value={formData.moveYear}
          name="moveYear"
          id="moveYear"
          onChange={handleChange}
        />

        <label htmlFor="ownHome">{isSpanish ? "¿Eres dueño de tu hogar?" : "Do you own your home?"}</label>
        <div>
          <input type="radio" id="yes" name="ownHome" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="ownHome" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="mortgage">{isSpanish ? "¿Tienes una hipoteca en el hogar?" : "Do you have a mortgage on the home?"}</label>
        <div>
          <input type="radio" id="yes" name="mortgage" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="mortgage" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="paymentsUpToDate">{isSpanish ? "¿Están al día los pagos?" : "Are payments up to date?"}</label>
        <div>
          <input type="radio" id="yes" name="paymentsUpToDate" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="paymentsUpToDate" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="renters">{isSpanish ? "¿Hay inquilinos en su hogar?" : "Are there renters in your home?"}</label>
        <div>
          <input type="radio" id="yes" name="renters" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="renters" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="onlyResidence">{isSpanish ? "¿Es esta su única residencia?" : "Is this your only residence?"}</label>
        <div>
          <input type="radio" id="yes" name="onlyResidence" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="onlyResidence" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="citation">{isSpanish ? "¿Se le ha emitido una citación por violaciones del código de vivienda?" : "Have you been issued a citation for housing code violations?"}</label>
        <div>
          <input type="radio" id="yes" name="citation" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="citation" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <label htmlFor="appliedBefore">{isSpanish ? "¿Ha solicitado anteriormente a Rebuilding Together Aurora o Christmas in April?" : "Have you applied before to Rebuilding Together Aurora or Christmas in April?"}</label>
        <div>
          <input type="radio" id="yes" name="appliedBefore" value={isSpanish ? "Sí" : "Yes"} onChange={handleChange} />
          <label htmlFor="yes">{isSpanish ? "Sí" : "Yes"}</label>

          <input type="radio" id="no" name="appliedBefore" value={isSpanish ? "No" : "No"} onChange={handleChange} />
          <label htmlFor="no">{isSpanish ? "No" : "No"}</label>
        </div>

        <button type="submit">{isSpanish ? "Enviar Solicitud" : "Submit Application"}</button>
      </form>
    </div>
  </div>
  );
}
