import React, { useState } from "react";
import "./BusinessServices.css";
import { submitEmail } from "../services/api"; // API function

const BusinessServices = () => {
  const [email, setEmail] = useState("");

// eslint-disable-next-line no-unused-vars
const [message, setMessage] = useState("");

// eslint-disable-next-line no-unused-vars
const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      setMessage("");
      return;
    }
    try {
      const response = await submitEmail(email);
      setMessage(response.message || "Form Submitted Successfully!");
      setError("");
      setEmail("");
    } catch (err) {
      setError(err.message || "Failed to submit. Try again.");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <div className="left-content">
        {/* ✅ Logo Section (Always at Top) */}
        <div className="logo-container">
          <span className="logo-box">
            <img
               src={`${process.env.PUBLIC_URL}/images/Logo.jpg`}
              alt="EZ Logo"
              className="logo-img"
            />
          </span>
          <span className="work-text">Works</span>
        </div>

        {/* ✅ Business Info Section */}
        <div className="left-content">
          <h2>Suite Of Business Support Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed ipsum dolor sit amet.
          </p>
        </div>

        {/* ✅ Email Form */}
        <form onSubmit={handleSubmit} className="contact">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Contact Me</button>
          <span>{message}</span>
        </form>
      </div>

      {/* ✅ Service Boxes (Now Separate) */}
      <div className="services">
        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/presentation.png"
              alt="Presentation Design"
              className="service-icon"
            />
            <h3>Presentation Design</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/audio.png"
              alt="Audio - Visual Production"
              className="service-icon"
            />
            <h3>Audio - Visual Production</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/translation.png"
              alt="Translation Services"
              className="service-icon"
            />
            <h3>Translation Services</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/graphic.png"
              alt="Graphic Design"
              className="service-icon"
            />
            <h3>Graphic Design</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/research.png"
              alt="Research & Analytics"
              className="service-icon"
            />
            <h3>Research & Analytics</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <img
              src="/images/data.png"
              alt="Data Processing"
              className="service-icon"
            />
            <h3>Data Processing</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
