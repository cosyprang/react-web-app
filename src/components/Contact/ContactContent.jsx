import { useState } from 'react'
import '../Contact/ContactContent.css'
import Nav from '../Nav/Nav'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            setFormData({ ...formData, phone: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Message sent!");

        setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
        });
    };

    return (
        <>
            <Nav />
            <section className="form-section-wrapper">
                <form onSubmit={handleSubmit} className="form-container">
                    <h2>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam neque maiores magnam aliquid itaque eius quidem ullam. Culpa, velit!</p>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name'
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <PhoneInput
                            international
                            defaultCountry="TH"
                            value={formData.phone}
                            onChange={(value) => handleChange({ target: { name: "phone", value } })}
                            placeholder='phone number'
                            className="form-phone-input"
                            dropdownClass="custom-dropdown"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Message'
                            className="form-input"
                        ></textarea>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
                <div className="form-img-container">
                    <div className="form-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact-img" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactContent;
