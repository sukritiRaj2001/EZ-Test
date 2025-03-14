// src/components/EmailForm.js
import React, { useState } from "react";
import { submitEmail } from "../services/api"; // Ensure this is imported

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Use submitEmail function to call API
    try {
      const response = await submitEmail(email); // Now we're actually using submitEmail
      if (response.status === 200) {
        setMessage("Form Submitted Successfully!");
        setError("");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Email Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default EmailForm;
