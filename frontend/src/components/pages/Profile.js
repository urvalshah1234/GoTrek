import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
import "../styles/Profile.css";

function Profile() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the registered email from localStorage on component mount
  useEffect(() => {
    const registeredEmail = localStorage.getItem("loggedInEmail");
    if (registeredEmail) {
      setEmail(registeredEmail);
    }
  }, []);

  const handleEmailChange = (value) => {
    setEmail(value);
    localStorage.setItem("loggedInEmail", value);
  };

  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");

  // Load saved form values from localStorage on component mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfile) {
      setFirstName(savedProfile.firstName || "");
      setLastName(savedProfile.lastName || "");
      setBirthday(savedProfile.birthday || "");
      setGender(savedProfile.gender || "");
      setHeight(savedProfile.height || "");
      setWeight(savedProfile.weight || "");
      setContactNumber(savedProfile.contactNumber || "");
      setEmail(savedProfile.email || "");
      setBloodGroup(savedProfile.bloodGroup || "");
      setAddress(savedProfile.address || "");
    }
  }, []);

  // Save form values to localStorage on change
  const saveToLocalStorage = (key, value) => {
    const profileData = {
      firstName,
      lastName,
      birthday,
      gender,
      height,
      weight,
      contactNumber,
      email,
      bloodGroup,
      address,
      [key]: value, // dynamically set the changed value
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
  };

  // Handle form submission to save data to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    const profileData = {
      first_name: firstName,
      last_name: lastName,
      birthday: birthday,
      gender: gender,
      height: height,
      weight: weight,
      contact_number: contactNumber,
      email: email,
      blood_group: bloodGroup,
      address: address,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/profile_view/",
        profileData
      );
      if (response.data.success) {
        alert("Profile saved successfully!");
      } else {
        alert("Profile update failed: " + response.data.message);
      }
    } catch (error) {
      console.error("There was an error saving the profile!", error);
      alert("There was an error saving the profile!");
    }
  };

  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="profile-container">
        <h1 style={{ color: "#b8490e", textAlign: "center" }}>Profile Page</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                saveToLocalStorage("firstName", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                saveToLocalStorage("lastName", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              required
              disabled={!!email} // Disable if email is already set
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => {
                setBirthday(e.target.value);
                saveToLocalStorage("birthday", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                saveToLocalStorage("gender", e.target.value);
              }}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                saveToLocalStorage("height", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                saveToLocalStorage("weight", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
                saveToLocalStorage("contactNumber", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => {
                setBloodGroup(e.target.value);
                saveToLocalStorage("bloodGroup", e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                saveToLocalStorage("address", e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
