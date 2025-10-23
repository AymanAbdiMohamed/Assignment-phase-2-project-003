import React, { useState } from 'react';
import axios from 'axios';

function AddPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newPlant = { name, price: Number(price) };
    const response = await axios.post('http://localhost:5000/plants', newPlant);
    onAddPlant(response.data);

    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-plant-form">
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default AddPlantForm;
