import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
import harishchandragad from "../assets/harishchandragad.jpg";
import kalsubai from "../assets/kalsubai.jpg";
import rajmachi from "../assets/rajmachi.jpg";
import "../styles/treks.css";

function Maharashtra() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Harishchandragad Trek",
      image: harishchandragad,
      description:
        "Harishchandragad Trek is a captivating adventure located in the Western Ghats of Maharashtra. Known for its stunning views and ancient fortifications, this trek takes you through dense forests and rocky terrains, offering panoramic views of the surrounding landscapes. The trek is famous for its cliffside temple and the majestic Konkan Kada, a cliff that offers a breathtaking view of the Konkan region.",
      link: "/harishchandragad",
    },
    {
      name: "Kalsubai Trek",
      image: kalsubai,
      description:
        "Kalsubai Trek is the highest peak in Maharashtra, offering a rewarding experience with panoramic views of the surrounding Western Ghats. The trek is relatively moderate and takes you through lush forests, rocky paths, and scenic meadows. Reaching the summit provides a 360-degree view of the Sahyadri range and the surrounding valleys, making it a popular trek for both beginners and experienced trekkers.",
      link: "/kalsubai",
    },
    {
      name: "Rajmachi Trek",
      image: rajmachi,
      description:
        "Rajmachi Trek is a popular trek located in the Sahyadri range, offering a blend of historical fortifications and scenic beauty. The trek takes you through dense forests, picturesque landscapes, and ancient forts, including the Shrivardhan and Manaranjan forts. It is a moderate trek that provides stunning views of the surrounding valleys and is ideal for both beginners and seasoned trekkers.",
      link: "/rajmachi",
    },
    // Add more trek objects as needed
  ];

  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ color: "orange", textAlign: "center" }}>
        Maharashtra Treks
      </h1>
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

export default Maharashtra;
