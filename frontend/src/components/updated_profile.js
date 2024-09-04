import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/UpdateProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function UpdateProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');

    if (email) {
      axios.get(`http://localhost:8000/profile_view/?email=${email}`)
        .then(response => {
          setProfile(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError("Failed to fetch profile data");
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <div className="update-profile-container">
        <h1 className="profile-title-update">Profile Details</h1>
        {profile && (
          <div className="profile-card-update">
            <div className="profile-info-update">
              <p><strong>First Name:</strong> {profile.first_name}</p>
              <p><strong>Last Name:</strong> {profile.last_name}</p>
              <p><strong>Birthday:</strong> {profile.birthday}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Height:</strong> {profile.height} cm</p>
              <p><strong>Weight:</strong> {profile.weight} kg</p>
              <p><strong>Contact Number:</strong> {profile.contact_number}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Blood Group:</strong> {profile.blood_group}</p>
              <p><strong>Address:</strong> {profile.address}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
      
    </>
  );
}

export default UpdateProfile;
