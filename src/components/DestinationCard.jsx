<<<<<<< HEAD
import React, { useState } from 'react';
import './DestinationCard.css';

function DestinationCard({ destination }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`destination-card ${expanded ? 'expanded' : ''}`}>
      <div className="card-image">
        <img src={destination.image} alt={destination.name} />
      </div>
      
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p className="card-location">{destination.country}, {destination.continent}</p>
        
        <div className="card-details">
          <div className="detail">
            <span className="detail-label">Budget:</span>
            <span className="detail-value">
              {destination.budget === 'Low' && '$'}
              {destination.budget === 'Medium' && '$$'}
              {destination.budget === 'High' && '$$$'}
            </span>
          </div>
          
          <div className="detail">
            <span className="detail-label">Climate:</span>
            <span className="detail-value">{destination.temperature}</span>
          </div>
        </div>
        
        {expanded && (
          <div className="card-expanded-content">
            <p>{destination.description}</p>
            
            <div className="activities">
              <h4>Activities:</h4>
              <ul>
                {destination.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            
            <div className="best-time">
              <h4>Best Time to Visit:</h4>
              <p>{destination.bestTimeToVisit}</p>
            </div>
          </div>
        )}
        
        <button 
          className="btn-more" 
          onClick={toggleExpanded}
        >
          {expanded ? 'Show Less' : 'Show More'}
=======
import React from "react";
import "./DestinationCard.css";

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
      {halfStar === 1 && <i className="fas fa-star-half-alt"></i>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
    </>
  );
}

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img
        src={destination.image}
        alt={destination.name}
        className="destination-img"
      />
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p className="location">
          {destination.country}, {destination.continent}
        </p>
        <div className="rating">{getStarRating(destination.rating)}</div>
        <p className="description">{destination.description}</p>
        <button className="view-btn" data-id={destination.id}>
          View Details
>>>>>>> 6ef2086 (adding files)
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
}

export default DestinationCard;
=======
};

export default DestinationCard;
>>>>>>> 6ef2086 (adding files)
