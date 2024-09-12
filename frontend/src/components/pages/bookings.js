import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Booking.css"; // Create this CSS file for styling

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8000/yourbookings/");
        setBookings(response.data);
      } catch (error) {
        console.error("There was an error fetching the bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Your Bookings</h1>
      </div>
      <div className="booking-cards-container">
        {bookings.length === 0 ? (
          <p className="no-bookings-message">No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h2 className="booking-card-title">{booking.trek}</h2>
              <p><strong>State:</strong> {booking.state}</p>
              <p><strong>Price:</strong> ₹{booking.price}</p>
              <p><strong>Trek Date:</strong> {new Date(booking.trek_date).toLocaleDateString()}</p>
              <p><strong>Payment Method:</strong> {booking.payment_method}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Booking;
