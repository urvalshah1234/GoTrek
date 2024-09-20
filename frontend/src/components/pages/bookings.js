import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Booking.css";

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

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete your booking? This action cannot be undone.");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/delete-booking/${bookingId}/`);
        // After deletion, filter out the deleted booking from the state
        setBookings(bookings.filter((booking) => booking.id !== bookingId));
        alert("Booking deleted successfully.");
      } catch (error) {
        console.error("There was an error deleting the booking:", error);
      }
    } else {
      console.log("Booking deletion canceled.");
    }
  };

  const handlePayNow = (bookingId) => {
    // Redirect to the payment page or handle payment logic here
    alert(`Initiating payment for booking ID: ${bookingId}`);
  };

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
              <p>
                <strong>State:</strong> {booking.state}
              </p>
              <p>
                <strong>Price:</strong> ₹{booking.price}
              </p>
              <p>
                <strong>Trek Date:</strong>{" "}
                {new Date(booking.trek_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Payment Method:</strong> {booking.payment_method}
              </p>
              <button
                className="pay-now-button"
                onClick={() => handlePayNow(booking.id)}
              >
                Pay Now
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(booking.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Booking;
