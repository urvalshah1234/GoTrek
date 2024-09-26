import React, { useState,useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Packing.css"; // Adjust this CSS file as needed

const Packing = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const [items] = useState([
    { id: 1, name: "Backpack" },
    { id: 2, name: "Water Bottle" },
    { id: 3, name: "First Aid Kit" },
    { id: 4, name: "Flashlight" },
    { id: 5, name: "Trekking Shoes" },
    { id: 6, name: "Food Supplies" },
    { id: 7, name: "Clothing" },
    { id: 8, name: "Map and Compass" },
    { id: 9, name: "Sunscreen" },
    { id: 10, name: "Insect Repellent" },
    { id: 11, name: "Hiking Poles" },
    { id: 12, name: "Rain Jacket" },
    { id: 13, name: "Hat or Cap" },
    { id: 14, name: "Multi-tool or Knife" },
    { id: 15, name: "Portable Charger" },
    { id: 16, name: "Emergency Blanket" },
    { id: 17, name: "Snacks (Energy Bars, Dried Fruit)" },
    { id: 18, name: "Personal Identification" },
    { id: 19, name: "Camera or Smartphone" },
    { id: 20, name: "Notebook and Pen" },
  ]);
  const [difficulty, setDifficulty] = useState('');
  const [weather, setWeather] = useState('');
  const [duration, setDuration] = useState('');
  const [packingList, setPackingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading while fetching
    const formData = { difficulty, weather, duration };

    fetch('http://localhost:8000/packing-list/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPackingList(data.packing_list);
        setIsLoading(false); // Stop loading after fetching
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); // Stop loading even if there's an error
      });
  };
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <div style={{background: 'rgb(243, 202, 149)'}}>
        <br/>
      <div className="packlist-container">
  <h1 className="packlist-title">Get Your Personalized Packing List</h1>
  
  {/* Trek Details Form */}
  <form onSubmit={handleFormSubmit} className="packlist-form">
    <label className="packlist-label">Difficulty:</label>
    <select
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
      className="packlist-select"
    >
      <option value="">Select Difficulty</option>
      <option value="easy">Easy</option>
      <option value="moderate">Moderate</option>
      <option value="hard">Hard</option>
    </select>

    <label className="packlist-label">Weather:</label>
    <select
      value={weather}
      onChange={(e) => setWeather(e.target.value)}
      className="packlist-select"
    >
      <option value="">Select Weather</option>
      <option value="sunny">Sunny</option>
      <option value="rainy">Rainy</option>
      <option value="snowy">Snowy</option>
    </select>

    <label className="packlist-label">Duration:</label>
    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="packlist-select"
    >
      <option value="">Select Duration</option>
      <option value="short">Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>

    <button type="submit" className="packlist-button">Get Packing List</button>
  </form>

  {/* Loading indicator */}
  {isLoading && <p className="packlist-loading">Loading packing list...</p>}

  {/* Packing List Display */}
  {!isLoading && packingList.length > 0 && (
    <div className="packlist-result">
      <h2 className="packlist-result-title">Packing List:</h2>
      <ul className="packlist-items">
        {packingList.map((item, index) => (
          <li key={index} className="packlist-item">{item}</li>
        ))}
      </ul>
    </div>
  )}
</div>
</div>
<div className="packing-layout-container">
        <div className="packing-card">
          <h1>General Packing Checklist</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="packing-item">
                <span>{item.name}</span>
                <input type="checkbox" />
              </li>
            ))}
          </ul>
        </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Packing;
