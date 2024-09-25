import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Review.css";
import React from "react";

function Review() {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top when the component is mounted
//   }, []);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("5");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set a flag to indicate submission in progress

    const reviewData = {
      name,
      review,
      rating: parseInt(rating),
    };

    try {
      const response = await fetch("http://localhost:8000/reviews/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const data = await response.json();
      alert("Review submitted successfully");
      console.log("Review submitted successfully:", data);

      // Reset form after successful submission
      setName("");
      setReview("");
      setRating("5");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); // Reset the submitting flag
    }
  };

  return (
    <div className="review_us-layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Review Us</h1>
      </div>
      <div className="review_us-form-container">
        <h2 className="review_us-form-title">Leave a Review</h2>

        <form className="review_us-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            className="review_us-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Your Review</label>
          <textarea
            className="review_us-textarea"
            placeholder="Write your review here"
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />

          <label>Rating</label>
          <select
            className="review_us-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Good</option>
            <option value="3">⭐⭐⭐ - Average</option>
            <option value="2">⭐⭐ - Poor</option>
            <option value="1">⭐ - Terrible</option>
          </select>

          <button
            className="review_us-submit-btn"
            type="submit"
            disabled={isSubmitting}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f65f0e")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#b8490e")}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Review;
