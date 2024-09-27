import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./styles/info2.css";
import { FaCloudSun, FaHiking, FaListUl, FaCameraRetro } from "react-icons/fa"; // New icons

function Info2() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  // Handler functions for navigation
  const handleWeatherClick = () => {
    navigate("/weather"); // Navigate to the weather page
  };

  const handleTrailInsightsClick = () => {
    navigate("/news"); // Navigate to trail insights page
  };

  const handlePackingChecklistClick = () => {
    navigate("/packing"); // Navigate to packing checklist page
  };

  const handleGalleryClick = () => {
    navigate("/photo"); // Navigate to gallery page
  };

  return (
    <div className="info2-container">
      <h1 style={{ textAlign: "center", color: "orange" }} data-aos="fade-up">Trekking Features</h1>
      <p className="info2-p" data-aos="fade-up" data-aos-delay="100">
        Discover tools and insights to enhance your trekking journey.
      </p>

      <div className="info2-sections">
        {/* Weather Section */}
        <div
          className="info2-section"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={handleWeatherClick} // Make card clickable
          style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickability
        >
          <FaCloudSun className="info2-icon" />
          <h2>Weather Forecast</h2>
          <p>
            Stay updated on the weather to better plan your trek.
          </p>
        </div>

        {/* Trail Insights Section */}
        <div
          className="info2-section"
          data-aos="fade-up"
          data-aos-delay="300"
          onClick={handleTrailInsightsClick} // Make card clickable
          style={{ cursor: "pointer" }}
        >
          <FaHiking className="info2-icon" />
          <h2>Trail Insights</h2>
          <p>
            Explore detailed information about various trekking routes.
          </p>
        </div>

        {/* Packing Checklist Section */}
        <div
          className="info2-section"
          data-aos="fade-up"
          data-aos-delay="400"
          onClick={handlePackingChecklistClick} // Make card clickable
          style={{ cursor: "pointer" }}
        >
          <FaListUl className="info2-icon" />
          <h2>Packing Checklist</h2>
          <p>
            Know what essential items to pack for your trek.
          </p>
        </div>

        {/* Gallery Section */}
        <div
          className="info2-section"
          data-aos="fade-up"
          data-aos-delay="500"
          onClick={handleGalleryClick} // Make card clickable
          style={{ cursor: "pointer" }}
        >
          <FaCameraRetro className="info2-icon" />
          <h2>Trek Gallery</h2>
          <p>
            See breathtaking views captured on various treks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info2;
