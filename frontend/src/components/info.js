import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./styles/Info.css";
import { FaMountain, FaHiking, FaMapSigns, FaCampground } from "react-icons/fa";

function Info() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="info-container">
      <h1 style={{ textAlign: "center", color: "orange" }} data-aos="fade-up">GoTrek</h1>
      <p className="info-p" data-aos="fade-up" data-aos-delay="100">
        Explore the world one step at a time with GoTrek, your ultimate
        companion for thrilling trekking adventures. Whether you are a seasoned
        trekker or a beginner looking to embark on your first journey, we
        provide all the information, tips, and gear recommendations you need.
      </p>

      <div className="info-sections_home">
        <div className="info-section_home" data-aos="fade-up" data-aos-delay="200">
          <FaMountain className="info-icon_home" />
          <h2>Why Trekking?</h2>
          <p>
            Trekking allows you to connect with nature, challenge yourself
            physically and mentally, and experience breathtaking landscapes.
            It's more than just a hike; it's an adventure.
          </p>
        </div>
        <div className="info-section_home" data-aos="fade-up" data-aos-delay="300">
          <FaHiking className="info-icon_home" />
          <h2>Our Top Trails</h2>
          <p>
            Discover some of the best trekking trails around the world. From the
            majestic Himalayas to the serene trails of Patagonia, find the
            perfect trail that suits your level and preference.
          </p>
        </div>
        <div className="info-section_home" data-aos="fade-up" data-aos-delay="400">
          <FaMapSigns className="info-icon_home" />
          <h2>Trekking Tips</h2>
          <p>
            Get expert advice on how to prepare for your trek, what to pack, and
            how to stay safe on the trails. Our tips will ensure you have a
            smooth and enjoyable trekking experience.
          </p>
        </div>
        <div className="info-section_home" data-aos="fade-up" data-aos-delay="500">
          <FaCampground className="info-icon_home" />
          <h2>Advice</h2>
          <p>
            Equip yourself with the right gear for your trek. From durable
            hiking boots to weather-resistant tents, we recommend the best
            equipment for all types of terrains and climates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
