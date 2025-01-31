import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedIn: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    
    alert("Your message has been sent!");
    setFormStatus("Thank you! Your message has been sent.");
    
    
    setFormData({
      name: "",
      email: "",
      interestedIn: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="interestedIn">What are you interested in?</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="">Select one...</option>
              <option value="caving">Caving</option>
              <option value="rock_climbing">Rock Climbing</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message or question"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>

      <div className="contact-map">
        <h3>Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.005103141056!2d23.316125875049526!3d42.703612713329356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856762d2c47f%3A0xfb789a6c09ee504f!2z0YPQuy4g4oCe0KHQsi4g0KHQsi4g0JrQuNGA0LjQuyDQuCDQnNC10YLQvtC00LjQuSwg0KHQvtGE0LjRjywg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2ssi!4v1738083237810!5m2!1sbg!2ssi"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;




