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

  if (loading) return <p className="updated-profile-loading">Loading...</p>;
  if (error) return <p className="updated-profile-error">{error}</p>;

  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <div className="updated-profile-bg">
        <div className="updated-profile-content">
          <h1 className="updated-profile-title">{profile.first_name} {profile.last_name}</h1>
          <div className="updated-profile-details">
            <div className="updated-profile-detail">
              <h2>Contact Number</h2>
              <p>{profile.contact_number}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Email</h2>
              <p>{profile.email}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Birthday</h2>
              <p>{profile.birthday}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Gender</h2>
              <p>{profile.gender}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Height</h2>
              <p>{profile.height} cm</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Weight</h2>
              <p>{profile.weight} kg</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Blood Group</h2>
              <p>{profile.blood_group}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Address</h2>
              <p>{profile.address}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdateProfile;
