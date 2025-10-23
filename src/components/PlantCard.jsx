import React from 'react';

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
    </div>
  );
}

export default PlantCard;
