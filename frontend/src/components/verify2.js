import React, { useState, useEffect } from "react";
import "./styles/loginform1.css";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Verify2() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    // Ensure the email entered is the same as the registered email
    const registeredEmail = localStorage.getItem("registeredEmail");
    if (email !== registeredEmail) {
      alert("The email entered does not match the registered email.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/send_otp/", { email });
      console.log("OTP sent to:", email);
      alert('OTP sent successfully');
    } catch (error) {
      console.error("Error sending OTP:", error.response.data);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registeredEmail = localStorage.getItem("registeredEmail");
    if (email !== registeredEmail) {
      alert("The email entered does not match the registered email.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/verify_otp/", // Ensure the endpoint matches your Django URL
        { email, otp }
      );
      console.log("Verification response:", response.data);
      navigate("/register");
    } catch (error) {
      alert("Verification failed: " + error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Verify Your Account</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <AiOutlineMail className="icon" />
          </div>
          <button
            type="button"
            onClick={handleSendOtp}
            className="small-button"
          >
            Send OTP
          </button>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </div>
          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
}

export default Verify2;
