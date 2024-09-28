import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import Sentiment from "sentiment";

function People() {
  // Local reviews (static data)
  const staticReviews = [
    {
      name: "Jay Patel",
      description:
        "An adventure of a lifetime! The trails were well-chosen, and the entire experience was seamless. Can't wait for the next trek!",
      rating: 5,
    },
    {
      name: "Pratham Shah",
      description:
        "Amazing trek! The organization was top-notch, and the scenery was just spectacular. Will definitely book with GoTrek again.",
      rating: 4,
    },
    {
      name: "Urval Shah",
      description:
        "GoTrek provided an unforgettable experience. The guides were knowledgeable, and the views were breathtaking. Highly recommended!",
      rating: 5,
    },
    {
      name: "Aanshi Patel",
      description:
        "GoTrek made everything so easy and enjoyable. The staff was friendly, and the locations were breathtaking. Highly recommended for nature lovers.",
      rating: 4,
    },
    {
      name: "Khushi Shah",
      description:
        "Had an incredible time trekking with GoTrek. The guides were experienced and helpful, making the entire journey unforgettable.",
      rating: 5,
    },
  ];

  // State to store reviews fetched from the database
  const [dbReviews, setDbReviews] = useState([]);

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:8000/reviews/");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setDbReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Analyze sentiment for a given text
  const analyzeSentiment = (text) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    return result.score; // Returns a score (positive, negative, or neutral)
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
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
        {/* Static reviews */}
        {staticReviews.map((review, index) => {
          const sentimentScore = analyzeSentiment(review.description);
          return (
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
              <h3 style={{ color: "#b8490e" }}>{review.name}</h3>
              <p>{review.description}</p>
              <div style={{ color: "gold", fontSize: "1.2em" }}>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p style={{ fontWeight: "bold" ,color:'#b8490e'}}>
                Sentiment Score: {sentimentScore}
              </p>
            </div>
          );
        })}

        {/* Reviews fetched from the database */}
        {dbReviews.map((review, index) => {
          const sentimentScore = analyzeSentiment(review.review);
          return (
            <div
              key={index + staticReviews.length} // Ensure unique keys across both arrays
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
              <h3 style={{ color: "#b8490e", textTransform: "capitalize" }}>
                {review.name}
              </h3>
              <p>{review.review}</p>
              <div style={{ color: "gold", fontSize: "1.2em" }}>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p style={{ color: "#b8490e",fontWeight: "bold" }}>
                Sentiment Score: {sentimentScore}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default People;
