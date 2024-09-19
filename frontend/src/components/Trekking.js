import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/Trekkingpage.css'
import ImageCard from "./ImageCard";
import mh from "./assets/mh.jpg";
import ladakh from "./assets/ladakh.jpg";
import goa from "./assets/goa.jpg";
import kerala from "./assets/kerala.jpg";
import Meghalaya from "./assets/Meghalaya.jpg";
import himachal from "./assets/himachal.jpg";
function Trekking() {
  const navigate = useNavigate();

  const cards = [
    { title: "Himachal", imageUrl: himachal, link: "/himachal" },
    { title: "Maharashtra", imageUrl: mh, link: "/mh" },
    { title: "Ladakh", imageUrl: ladakh, link: "/ladakh" },
    { title: "Goa", imageUrl: goa, link: "/goa" },
    { title: "Kerala", imageUrl: kerala, link: "/kerala" },
    { title: "Meghalaya", imageUrl: Meghalaya, link: "/Meghalaya" },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <>
    <div className="bg-trek-div">
      <h1 style={{ textAlign: "center" ,color:'white',fontWeight:'bold'}}>Popular States</h1>
      <p style={{ textAlign: "center", color: "white" }}>
        Recommended states by our experts
      </p>
      <div
        className="card-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "20px 0",
          justifyContent: "space-around",
          color:'white',
        }}
      >
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            imageUrl={card.imageUrl}
            onClick={() => handleCardClick(card.link)}
            title={card.title}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default Trekking;
