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
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;