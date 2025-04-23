import React from 'react';
import DestinationCard from './DestinationCard';
import './DestinationList.css';

function DestinationList({ destinations }) {
  if (destinations.length === 0) {
    return (
      <div className="no-destinations">
        <p>No destinations match your filters. Try adjusting your criteria.</p>
      </div>
    );
  }

  return (
    <div className="destinations-container">
      <h2>Matching Destinations</h2>
      <div className="destinations-grid">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default DestinationList;