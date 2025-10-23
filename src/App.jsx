import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import PlantList from './components/PlantList.jsx';
import AddPlantForm from './components/AddPlantForm.jsx';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function fetchPlants() {
      const response = await axios.get('http://localhost:5000/plants');
      setPlants(response.data);
    }
    fetchPlants();
  }, []);

  const handleAddPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <div className="App">
      <Header />
      <AddPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
