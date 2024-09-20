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

  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <div className="packing-layout-container">
        <div className="packing-card">
          <h1>Packing Checklist</h1>
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
