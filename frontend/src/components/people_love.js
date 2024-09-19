import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import urval from "./assets/urval.jpg";
import aanshi from "./assets/aanshi.jpg";
import p1 from "./assets/p1.jpg";
import jay from "./assets/jay.jpg";
import kanisha from "./assets/kanisha.jpg";
function People() {
  const reviews = [
    {
      name: "Jay patel",
      image: jay, // Replace with actual image paths
      description:
        "An adventure of a lifetime! The trails were well-chosen, and the entire experience was seamless. Can't wait for the next trek!",
      rating: 5,
    },
    {
      name: "Pratham shah",
      image: p1, // Replace with actual image paths
      description:
        "Amazing trek! The organization was top-notch, and the scenery was just spectacular. Will definitely book with GoTrek again.",
      rating: 4,
    },
    {
      name: "Urval shah",
      image: urval, // Replace with actual image paths
      description:
        "GoTrek provided an unforgettable experience. The guides were knowledgeable, and the views were breathtaking. Highly recommended!",
      rating: 5,
    },
    {
      name: "Aanshi patel",
      image: aanshi, // Replace with actual image paths
      description:
        "GoTrek made everything so easy and enjoyable. The staff was friendly, and the locations were breathtaking. Highly recommended for nature lovers.",
      rating: 4,
    },
    {
      name: "Kanisha shah",
      image: kanisha, // Replace with actual image paths
      description:
        "Had an incredible time trekking with GoTrek. The guides were experienced and helpful, making the entire journey unforgettable.",
      rating: 5,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center"}}>
        <span style={{ color: "orange" }}>
          Why people{" "}
           <span style={{ color: "red" }}>
            <FaHeart />
          </span>{" "}
          GoTrek
        </span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "5px 20px 20px 20px",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "250px",
              margin: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src={review.image}
              alt={review.name}
              style={{ width: "30%", height: "auto", borderRadius: "100px" }}
            />
            <h3 style={{color:'#b8490e'}} >{review.name}</h3>
            <p>{review.description}</p>
            <div style={{ color: "gold", fontSize: "1.2em" }}>
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default People;
