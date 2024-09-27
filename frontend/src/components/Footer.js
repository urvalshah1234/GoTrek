import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import chatbot from './assets/chatbot.jpg'
import "./styles/Footer.css";
import logo from "./assets/logo.jpg";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-left">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={logo} alt="Trekking Logo" className="footer-logo" />
          <h4 className="footer-title">GoTrek</h4>
          <p className="footer-subtitle">Explore the world with us</p>
        </div>

        {/* Social Media Icons Section */}
        <div className="footer-social-icons">
          <a
            className="footer-sinsta"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          /
          <a
            className="footer-sfacebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          /
          <a
            className="footer-stwitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          /
          <a
            className="footer-swhatsapp"
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          /
          <a
            className="footer-syoutube"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Chatbot Icon Section */}
        <div
          className="footer-chatbot-section"
          onClick={() => navigate("/chatbot")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={chatbot}
            alt="Chatbot"
            className="footer-chatbot-image"
          />
          <p className="footer-chatbot-title">Chat with us</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-right">
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
              <a onClick={() => navigate("/review")} className="footer-link">
                Review us
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
        <div className="footer-section">
          <h5 className="footer-heading">Popular States</h5>
          <ul className="footer-list">
            <li>
              <a onClick={() => navigate("/ladakh")} className="footer-link">
                Ladakh
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
              <a onClick={() => navigate("/goa")} className="footer-link">
                Goa
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Contact</h5>
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
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
