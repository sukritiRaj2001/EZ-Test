import React, { useState } from "react";
import "./BusinessServices.css";


const BusinessServices = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      setMessage("");
      return;
    }
    setMessage("");
    setError("");
    setEmail("");
  };

  return (
    <div className="container">
      {/* Left Section - Logo, Heading, Content */}
      <div className="left-content">
        <h1 className="logo-container">
          <span className="logo-box">
            <img src={`${process.env.PUBLIC_URL}/images/Logo.jpg`} alt="EZ Logo" className="logo-img" />
          </span>
          <span className="work-text">Works</span>
        </h1>
        <h2>Suite Of Business Support Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor sit amet.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="contact">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Contact Me</button>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
      </div>

      {/* Right Section - Service Boxes */}
      <div className="services">
        <div className="service-card">
          <h3>📊 Presentation Design</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>

        <div className="service-card">
          <h3>🎥 Audio - Visual Production</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>

        <div className="service-card">
          <h3>🈴 Translation Services</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>

        <div className="service-card">
          <h3>🎨 Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>

        <div className="service-card">
          <h3>🔍 Research & Analytics</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>

        <div className="service-card">
          <h3>📑 Data Processing</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Responsive Device Info (Hidden) */}
<div className="mt-4 responsive-list">
  <h3>Responsive will be checked on:</h3>
  <ul className="list-unstyled">
    <li><i className="bi bi-phone"></i>  480p (Mobile View)</li>
    <li><i className="bi bi-laptop"></i>  720p</li>
    <li><i className="bi bi-display"></i>  1080p</li>
    <li><i className="bi bi-tablet"></i>  2732x2048 (iPad)</li>
    <li><i className="bi bi-pc-display"></i>  1440x823 (MacBook)</li>
  </ul>
</div>

    </div> 
  );
};

export default BusinessServices;
