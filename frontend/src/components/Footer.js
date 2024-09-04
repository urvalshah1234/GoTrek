import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./styles/Footer.css"; // Assuming you'll style it in this file

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      {/* Social Media Icons Section */}
      <div className="social-media-icons">
        <a
          className="sinsta"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        /
        <a
          className="sfacebook"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        /
        <a
          className="stwitter"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        /
        <a
          className="swhatsapp"
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        /
        <a
          className="syoutube"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Footer Sections */}
      <div className="footer-content">
        <div className="footer-section">
          <h5 className="footer-heading">Terms and Conditions</h5>
          <p>
            By using this website and booking our trekking services, you agree
            to our{" "}
            <span>
              <a
                onClick={() => navigate("/tnc")}
                style={{ textDecoration: "underline", color: "blue" }}
              >
                Terms and Conditions.
              </a>
            </span>{" "}
            Please ensure you read and understand our policies on bookings,
            cancellations, safety guidelines, and liability. Your safety and
            satisfaction are our priority.
          </p>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Creations</h5>
          <ul className="footer-list">
            <li>
              <a onClick={() => navigate("/photo")} className="footer-link">
                Photos
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/photo")} className="footer-link">
                Videos
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/photo")} className="footer-link">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="footer-heading">Popular States</h5>
          <ul className="footer-list">
            <li>
              <a onClick={() => navigate("/gujarat")} className="footer-link">
                Gujarat
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/himachal")} className="footer-link">
                Himachal
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/mh")} className="footer-link">
                Maharashtra
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/uttar")} className="footer-link">
                Uttarakhand
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="footer-list">
            <li>
              <a onClick={() => navigate("/home")} className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/dashboard")} className="footer-link">
                Dashboard
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/activity")} className="footer-link">
                Activity
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/contact")} className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/about")} className="footer-link">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-contact">
        <h4 className="footer-heading">Contact</h4>
        <address className="footer-address">
          <strong>Ahmedabad (Head Office)</strong>
          <br />
          308, University Plaza, Above Chocolate Room,
          <br />
          Vijay Cross Roads, Navrangpura,
          <br />
          Ahmedabad, Gujarat 380009
          <br />
          Office Timings: 10AM to 9PM
          <br />
          Contact Number: 9999999999
        </address>
      </div>
    </div>
  );
}

export default Footer;
