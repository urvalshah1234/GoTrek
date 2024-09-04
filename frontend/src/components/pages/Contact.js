import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
import "../styles/Contact.css";
import React from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{textAlign:'center',color:'orange'}}>GoTrek Locations</h1>
      <div className="address-sections">
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Ahmedabad (Head Office)</h2>
              <p>
                308, University Plaza, Above Chocolate Room, Vijay Cross Roads,
                Navrangpura, Ahmedabad, Gujarat - 380009
              </p>
              <p>Office Timings: 11AM to 8PM</p>
              <p>Phone num :- 9999999999</p>
              <p>Email: ahmedabad_GoTrek@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Rajkot</h2>
              <p>
                407, 4th Floor, Business Corner, Opp Indira Circle BRTS, Rajkot,
                Gujarat - 360005
              </p>
              <p>Office Timings: 11AM to 8PM</p>
              <p>Phone num :- 9995679999</p>
              <p>Email: rajkot_GoTrek@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Baroda</h2>
              <p>116, Saffron Tower, Fatehgunj, Vadodara, Gujarat - 390008</p>
              <p>Office Timings: 11AM to 8PM</p>
              <p>Phone num :- 9785679999</p>
              <p>Email: baroda_GoTrek@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Surat</h2>
              <p>
                436, Rajhans Ornate Mall, Nr Jani Farsan, Parle Point Circle,
                Athwa, Surat, Gujarat - 395007
              </p>
              <p>Office Timings: 11AM to 8PM</p>
              <p>Phone num :- 9785679819</p>
              <p>Email: surat_GoTrek@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
