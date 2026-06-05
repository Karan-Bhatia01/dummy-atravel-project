import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./PackageCard.css";

const PackageCard = ({ image, title, location, price }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);

    // Future Integration:
    // Pass data to parent component or API
  };

  return (
    <div className="package-card">
      <div className="image-container">
        <img src={image} alt={title} />

        <button className="heart-btn" onClick={handleFavorite}>
          {favorite ? (
            <FaHeart className="heart active" />
          ) : (
            <FaRegHeart className="heart" />
          )}
        </button>
      </div>

      <div className="package-content">
        <h3>{title}</h3>
        <p>{location}</p>

        <div className="package-footer">
          <span className="price">₹{price}</span>

          <button className="book-btn">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;