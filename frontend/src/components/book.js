import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/BookNow.css";

const states = [
  "Himachal-pradesh",
  "Goa",
  "Kerela",
  "Ladakh",
  "Maharashtra",
  "Meghalaya",
];

const treksByState = {
  "Himachal-pradesh": [
    { name: "Hampta Pass Trek", price: "13000" },
    { name: "Triund Trek", price: "9000" },
  ],
  Goa: [
    { name: "Dudhsagar Falls Trek", price: "10000" },
    { name: "Tambdi Surla Trek", price: "6000" },
  ],
  Kerela: [
    { name: "Agasthyakoodam Trek", price: "15000" },
    { name: "Chembra Peak Trek", price: "17000" },
  ],
  Ladakh: [
    { name: "Chadar Trek", price: "11000" },
    { name: "Stok Kangri Trek", price: "8000" },
  ],
  Maharashtra: [
    { name: "Kalsubai Trek", price: "14000" },
    { name: "Rajmachi Trek", price: "8000" },
  ],
  Meghalaya: [
    { name: "Living Root Bridges Trek", price: "12000" },
    { name: "Nokrek Peak Trek", price: "7000" },
  ],
};

function BookNow() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [availableTreks, setAvailableTreks] = useState([]);
  const [selectedTrek, setSelectedTrek] = useState("");
  const [selectedTrekPrice, setSelectedTrekPrice] = useState("");
  const [trekDate, setTrekDate] = useState("");
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    phone: "",
  });
  const [accommodation, setAccommodation] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [equipmentRental, setEquipmentRental] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [liabilityWaiver, setLiabilityWaiver] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  useEffect(() => {
    if (selectedState) {
      setAvailableTreks(treksByState[selectedState]);
      setSelectedTrek("");
      setSelectedTrekPrice("");
    } else {
      setAvailableTreks([]);
    }
  }, [selectedState]);

  const handleTrekChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedTrek(selectedOption);
    const trek = availableTreks.find((trek) => trek.name === selectedOption);
    setSelectedTrekPrice(trek ? trek.price : "");
  };
  useEffect(() => {
    const registeredEmail = localStorage.getItem("loggedInEmail");
    if (registeredEmail) {
      setEmail(registeredEmail);
    }
  }, []);

  const handleEmailChange = (value) => {
    setEmail(value);
    localStorage.setItem("registeredEmail", value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Confirmation dialog
    const confirmBooking = window.confirm(
      "Are you sure you want to submit your booking?"
    );

    if (!confirmBooking) {
      console.log("Booking submission canceled.");
      return; // Exit the function if the user cancels
    }

    // Create the data object to send to the backend
    const bookingData = {
      email: email, // Include the email field
      state: selectedState,
      trek: selectedTrek,
      price: selectedTrekPrice,
      trek_date: trekDate,
      emergency_contact_name: emergencyContact.name,
      emergency_contact_phone: emergencyContact.phone,
      accommodation: accommodation,
      special_requests: specialRequests,
      equipment_rental: equipmentRental,
      payment_method: paymentMethod,
      liability_waiver: liabilityWaiver,
    };

    try {
      // Make the POST request to your Django backend
      const response = await axios.post(
        "http://localhost:8000/bookings/", // Ensure this is the correct API endpoint
        bookingData
      );
      console.log(response.data);
      alert("Booking submitted successfully!");
      navigate("/home");
    } catch (error) {
      console.error(
        "There was an error making the request:",
        error.response.data
      );
      if (error.response.data.error) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="booking-page-container">
        <div className="booking-left-section"></div>
        <div className="booking-middle-section">
          <div className="booking-container">
            <h1 style={{ color: "#b8490e" }}>Book Your Trek Adventure</h1>
            <p>
              Fill out the form below to book your next trekking adventure.
              Please provide all the necessary details to ensure a smooth
              experience.
            </p>
            <form className="booking-form" onSubmit={handleSubmit}>
              {/* Email field */}
              <div className="booking-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                  disabled={!!email}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="state">Select State:</label>
                <select
                  id="state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-form-group">
                <label htmlFor="trek">Select Trek:</label>
                <select
                  id="trek"
                  value={selectedTrek}
                  onChange={handleTrekChange}
                  disabled={!selectedState}
                >
                  <option value="">Select a trek</option>
                  {availableTreks.map((trek) => (
                    <option key={trek.name} value={trek.name}>
                      {trek.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedTrekPrice && (
                <div className="booking-trek-price">
                  <p>Price: ₹{selectedTrekPrice}</p>
                </div>
              )}

              <div className="booking-form-group">
                <label htmlFor="trekDate">Preferred Trek Date(s):</label>
                <input
                  type="date"
                  id="trekDate"
                  value={trekDate}
                  onChange={(e) => setTrekDate(e.target.value)}
                  min={today} // Set min to today's date
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="emergencyName">Emergency Contact Name:</label>
                <input
                  type="text"
                  id="emergencyName"
                  value={emergencyContact.name}
                  onChange={(e) =>
                    setEmergencyContact({
                      ...emergencyContact,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="emergencyPhone">Emergency Contact Phone:</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  value={emergencyContact.phone}
                  onChange={(e) =>
                    setEmergencyContact({
                      ...emergencyContact,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="accommodation">
                  Accommodation Preferences:
                </label>
                <input
                  type="text"
                  id="accommodation"
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="equipmentRental">Equipment Rental Needs:</label>
                <input
                  type="text"
                  id="equipmentRental"
                  value={equipmentRental}
                  onChange={(e) => setEquipmentRental(e.target.value)}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Select a payment method</option>
                  <option value="debit_card">Debit Card</option>
                  <option value="netbanking">Netbanking</option>
                  <option value="upi">UPI</option>
                </select>
              </div>

              <div className="booking-form-group">
                <label className="liability-waiver-label">
                  I agree to the liability waiver terms and conditions
                  <input
                    type="checkbox"
                    id="liabilityWaiver"
                    className="booking-liability-checkbox"
                    checked={liabilityWaiver}
                    onChange={(e) => setLiabilityWaiver(e.target.checked)}
                  />
                </label>
              </div>

              <button type="submit" className="booking-button">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div className="booking-right-section"></div>
      </div>
      <Footer />
    </>
  );
}

export default BookNow;
