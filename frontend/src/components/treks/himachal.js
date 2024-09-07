import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
import triund from "../assets/triund.jpg";
import hamta from "../assets/hamta.jpg";
import "../styles/treks.css";
function Himachal() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Hampta Pass Trek",
      image: hamta,
      description:
        "The Hampta Pass Trek is an exhilarating adventure located in the Kullu Valley of Himachal Pradesh. This trek is renowned for its diverse landscapes, ranging from lush green meadows to barren high-altitude deserts. It connects the lush green Kullu Valley with the arid Spiti Valley, offering trekkers a dramatic change in scenery and a unique trekking experience.",
      link: "/hamta",
    },
    {
      name: "Triund Trek",
      image: triund,
      description:
        "A short and easy trek that offers panoramic views of the Kangra Valley and the snow-capped Dhauladhar range. The Triund Trek is a short and rewarding trek located in the Kangra Valley of Himachal Pradesh. Known for its breathtaking views and relatively easy ascent, it is an ideal trek for beginners and casual trekkers. The trek offers panoramic views of the snow-capped Dhauladhar mountain range and the lush green Kangra Valley below.",
      link: "/triund",
    },
  ];

  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Himachal Pradesh</h1>
      </div>
      {treks.map((trek, index) => (
        <div
          key={index}
          className="trek-section"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            cursor: "pointer",
          }}
          onClick={() => navigate(trek.link)}
        >
          <div className="trek-image" style={{ flex: 1 }}>
            <img src={trek.image} alt={trek.name} style={{ width: "100%" }} />
          </div>
          <div className="trek-details" style={{ flex: 2, padding: "20px" }}>
            <h2>{trek.name}</h2>
            <p>{trek.description}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Himachal;
