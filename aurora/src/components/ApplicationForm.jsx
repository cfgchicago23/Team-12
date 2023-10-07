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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="sign-up-container">
            <form className="sign-up-form">
                <h1>Application</h1>

                <label htmlFor="applicantName">Name of Applicant:</label>
                <input value={formData.applicantName} name="applicantName" id="applicantName" placeholder="Full Name" onChange={handleChange} />

                <label htmlFor="streetAddress">Street Address:</label>
                <input value={formData.streetAddress} name="streetAddress" id="streetAddress" placeholder="Street Address" onChange={handleChange} />

                <label htmlFor="phone">Phone #:</label>
                <input value={formData.phone} type="tel" name="phone" id="phone" placeholder="(XXX)-XXX-XXXX" onChange={handleChange} />

                <label htmlFor="alternatePhone">Alternate Phone #:</label>
                <input value={formData.alternatePhone} type="tel" name="alternatePhone" id="alternatePhone" placeholder="(XXX)-XXX-XXXX" onChange={handleChange} />

                <label htmlFor="primaryContact">Primary Contact (if not homeowner):</label>
                <input value={formData.primaryContact} name="primaryContact" id="primaryContact" placeholder="Contact Name" onChange={handleChange} />

                <label htmlFor="relationship">Relationship:</label>
                <input value={formData.relationship} name="relationship" id="relationship" placeholder="Relationship" onChange={handleChange} />

                <label htmlFor="contactPhone">Phone #:</label>
                <input value={formData.contactPhone} type="tel" name="contactPhone" id="contactPhone" placeholder="(XXX)-XXX-XXXX" onChange={handleChange} />

                <label htmlFor="birthdate">Date of Birth:</label>
                <input value={formData.birthdate} type="date" name="birthdate" id="birthdate" onChange={handleChange} />

                <label htmlFor="age">Age:</label>
                <input value={formData.age} type="number" name="age" id="age" onChange={handleChange} />

                <label htmlFor="sex">Sex:</label>
                <div>
                    <input type="radio" id="male" name="sex" value="Male" onChange={handleChange} />
                    <label htmlFor="male">Male</label>

                    <input type="radio" id="female" name="sex" value="Female" onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                </div>

                <label htmlFor="maritalStatus">Marital Status:</label>
                <div>
                    <div>
                        <input type="radio" id="married" name="maritalStatus" value="Married" onChange={handleChange} />
                        <label htmlFor="married">Married</label>
                    </div>
                    <div>
                        <input type="radio" id="single" name="maritalStatus" value="Single/never married" onChange={handleChange} />
                        <label htmlFor="single">Single/Never married</label>
                    </div>
                    <div>
                        <input type="radio" id="single" name="maritalStatus" value="Living with partner" onChange={handleChange} />
                        <label htmlFor="single">Living with partner</label>
                    </div>
                    <div>
                        <input type="radio" id="single" name="maritalStatus" value="Divorced/Separated" onChange={handleChange} />
                        <label htmlFor="single">Divorced/Separated</label>
                    </div>
                    <div>
                        <input type="radio" id="single" name="maritalStatus" value="Widowed" onChange={handleChange} />
                        <label htmlFor="single">Widowed</label>
                    </div>
                </div>

                <label htmlFor="disabled">Disabled?:</label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="zipCode">Zip code:</label>
                <input value={formData.zipCode} name="zipCode" id="zipCode" onChange={handleChange} />

                <label htmlFor="race">Race/Ethnicity:</label>
                <div>
                    <div>
                        <input type="radio" id="hispanic" name="race" value="Hispanic/Latino" onChange={handleChange} />
                        <label htmlFor="hispanic">Hispanic/Latino</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="black" name="race" value="Black/African American" onChange={handleChange} />
                        <label htmlFor="black">Black/African American</label>
                    </div>
                    <div>
                        <input type="radio" id="asian" name="race" value="Asian" onChange={handleChange} />
                        <label htmlFor="asian">Asian</label>
                    </div>
                    <div>
                        <input type="radio" id="americanIndian" name="race" value="American Indian/Alaskan Native" onChange={handleChange} />
                        <label htmlFor="americanIndian">American Indian/Alaskan Native</label>
                    </div>
                    <div>
                        <input type="radio" id="pacific" name="race" value="Pacific Islander " onChange={handleChange} />
                        <label htmlFor="pacific">Pacific Islander </label>
                    </div>
                    <div>
                        <input type="radio" id="white" name="race" value="White/Caucasian " onChange={handleChange} />
                        <label htmlFor="white">White/Caucasian </label>
                    </div>
                </div>

                <label htmlFor="moveYear">What year did you move into your home? </label>
                <input value={formData.moveYear} name="moveYear" id="moveYear" onChange={handleChange} />

                <label htmlFor="ownHome">Do you own your home?: </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="mortgage">Do you have a mortgage on the home?: </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="paymentsUpToDate">Are payments up to date? </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="renters">Are there renters in your home? </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="onlyResidence">Is this your only residence? </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="citations">Have you been issues a citation for housing code violations? </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <label htmlFor="appliedBefore">Have you applied before to Rebuilding Together Aurora or Christmas in April? </label>
                <div>
                    <input type="radio" id="yes" name="disabled" value="Yes" onChange={handleChange} />
                    <label htmlFor="yes">Yes</label>

                    <input type="radio" id="no" name="disabled" value="No" onChange={handleChange} />
                    <label htmlFor="no">No</label>
                </div>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}
