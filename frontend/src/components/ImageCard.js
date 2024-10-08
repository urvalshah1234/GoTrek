import React from "react";
import "./styles/ImageCard.css"; // Create this CSS file for styling

function ImageCard({ title, imageUrl, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
        <div className="image-card-overlay">
          <h4>{title}</h4>
        </div>
        <h3 style={{textAlign:'center'}}>{title}</h3>
        <img src={imageUrl} alt={title} className="image-card-img" />
        
    </div>
  );
}

export default ImageCard;
