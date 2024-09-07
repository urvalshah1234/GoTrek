import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
import polo from "./assets/polo.jpg";
import saputara from "./assets/saputara.jpg";
import dang from "./assets/dang.jpg";
import matheran from "./assets/matheran.jpg";
import jaisalmer from "./assets/jaisalmer.jpg";
import coorg from "./assets/coorg.jpg";
import "./styles/weekend.css";
function Weekend() {
  const navigate = useNavigate();

  const cards = [
    { title: "Polo forest", imageUrl: polo, link: "/polo" },
    { title: "Matheran", imageUrl: matheran, link: "/matheran" },
    { title: "Dang", imageUrl: dang, link: "/dang" },
    { title: "Saputara", imageUrl: saputara, link: "/saputara" },
    { title: "Jaisalmer", imageUrl: jaisalmer, link: "/jaisalmer" },
    { title: "Coorg", imageUrl: coorg, link: "/coorg" },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="imagehai">
        <h1 style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
          Weekend Destinations
        </h1>

        <p style={{ textAlign: "center", color: "white" }}>
          Recommended for weekend trips by our experts
        </p>
        <div
          className="card-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px 0",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          {cards.map((card, index) => (
            <ImageCard
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              onClick={() => handleCardClick(card.link)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Weekend;
