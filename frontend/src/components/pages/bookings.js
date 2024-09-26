import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Booking.css";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [paidBookings, setPaidBookings] = useState(new Set()); // Track paid bookings
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
        setBookings(bookings.filter((booking) => booking.id !== bookingId));
        alert("Booking deleted successfully.");
      } catch (error) {
        console.error("There was an error deleting the booking:", error);
      }
    } else {
      console.log("Booking deletion canceled.");
    }
  };

  const handlePayNow = async (booking) => {
    const confirmPay = window.confirm(`Do you want to proceed with payment for ${booking.trek} in ${booking.state}?`);

    if (confirmPay) {
        try {
            const response = await axios.post(`http://localhost:8000/create-order/`, {
                bookingId: booking.id,
            });

            const { orderId, amount } = response.data;

            const options = {
                key: "rzp_test_FQzlH7whPNyTpw", // Your Razorpay key
                amount: amount,
                currency: "INR",
                name: "GoTrek",
                description: `Payment for ${booking.trek} in ${booking.state}`,
                order_id: orderId,
                handler: function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    setPaidBookings(prev => new Set(prev).add(booking.id));
                },
                prefill: {
                  name:  "Urval shah",
                  email: "urvalshah1234@gmail.com",
                  contact: "7043643600",
                },
                notes: {
                    address: "Customer Address",
                },
                theme: {
                    color: "#F37254",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    }
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
                <strong>Trek Date:</strong> {new Date(booking.trek_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Payment Method:</strong> {booking.payment_method}
              </p>
              {/* Conditionally render Pay Now button */}
              {!paidBookings.has(booking.id) && (
                <button
                  className="pay-now-button"
                  onClick={() => handlePayNow(booking)}
                >
                  Pay Now
                </button>
              )}
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
