import React, {useState} from "react"
import {Form} from "react-bootstrap"

export function SignUp() {
    const [formData, setForms] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        address: "",
        dateOfBirth: "",
        areasOfExpertise: ""
    });
    return (
        <div className="container">
            <div className="form">
                <form>
                    <Form.Group>
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Type in your first name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Type in your last name"/>
                    </Form.Group>
                </form>
            </div>
        </div>
    );    
}