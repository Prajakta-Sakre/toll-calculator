// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import CalculateTollButton from './components/CalculateTollButton';
import MapContainer from './components/MapContainer';
import DistanceGraph from './components/DistanceGraph';
import './App.css';

const App = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [distance, setDistance] = useState(0);
  const [tollCost, setTollCost] = useState(null);
  const [distanceData, setDistanceData] = useState([]);

  const calculateToll = async () => {
    // Simulating API call (replace with actual API call)
    try {
      const tollguruKey = process.env.jFmGpPDTJr7t4fLMDdgq4N3br9jM46PJ;
      // const response = await fetch(`https://api.example.com/calculateToll?type=${vehicleType}&distance=${distance}`);
      const response = await fetch(`https://api.example.com/calculateToll?type=${vehicleType}&distance=${distance}`);
      const data = await response.json();

      // Use the obtained data to set the tollCost state
      // Example: setTollCost(data.tollCost);
      setTollCost(data.tollCost);

      // Update distanceData for the graph
      setDistanceData([...distanceData, distance]);
    } catch (error) {
      console.error('Error calculating toll:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="input-container">
        <label htmlFor="vehicleType">Select Vehicle Type:</label>
        <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          {/* Add more vehicle options as needed */}
        </select>

        <label htmlFor="distance">Enter Distance (in miles):</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>

      <CalculateTollButton onClick={calculateToll} />
      
      {tollCost !== null && <p>Toll Cost: ${tollCost}</p>}
      
      <DistanceGraph data={distanceData} />

      <MapContainer />
    </div>
  );
};

export default App;
