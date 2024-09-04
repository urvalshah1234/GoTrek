import React, { useState } from "react";
import "../styles/loginform1.css";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/login/', { // Replace with your actual backend endpoint
        username,
        password,
      });
  
      // Handle successful login here
      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      // Handle errors here
      console.error("Login failed:", error.response.data);
      alert("Login failed: " + error.response.data.message); // Show error message to the user
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to GoTrek</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <CgProfile className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <RiLockPasswordLine className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
             <a onClick={() => navigate("/forgot")}>Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <a className="register-link" onClick={() => navigate("/register")}>Sign up?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
