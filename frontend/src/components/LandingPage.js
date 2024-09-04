import React from 'react';
import './styles/LandingPage.css'; // Assuming you'll style it in this file
import hero from './assets/hero.jpg'; // Your hero image
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  
  function handleDiscover(params) {
    navigate('/login');
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-content">
          <h1>Explore the World's Most Breathtaking Treks</h1>
          <p>Join us on an unforgettable journey through nature's wonders.</p>
          <button className="cta-button" onClick={()=>{navigate('/register')}}>Discover More</button>
        </div>
      </section>

      {/* Trek Information Section */}
      <section className="trek-info">
        <div className="container">
          <h2>About Our Treks</h2>
          <p>
            Our trekking expeditions are designed for adventurers of all levels.
            Whether you're a seasoned trekker or a first-time hiker, we have something for you.
            Experience stunning landscapes, diverse cultures, and the thrill of exploration.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights" id="highlights">
        <div className="container">
          <h2>Trek Highlights</h2>
          <div className="highlight-cards">
            <div className="highlight-card">
              <h3>Mountains</h3>
              <p>Conquer some of the world's most iconic peaks and enjoy panoramic views that will take your breath away.</p>
            </div>
            <div className="highlight-card">
              <h3>Lakes Trek</h3>
              <p>Explore tranquil lakes surrounded by lush forests, a perfect spot for relaxation and reflection.</p>
            </div>
            <div className="highlight-card">
              <h3>Wildlife Trek</h3>
              <p>Encounter a variety of wildlife in their natural habitats, from rare birds to elusive mammals.</p>
            </div>
            <div className="highlight-card">
              <h3>Snow Treks</h3>
              <p>Explore an adventure through pristine, snow-covered landscapes, featuring icy trails and breathtaking winter views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <div className="container">
          <h2>Ready to Start Your Adventure?</h2>
          <button onClick={handleDiscover} className="cta-button">Login now!</button>
        </div>
        <div style={{textAlign:'center',marginTop:'50px'}} className="footer-copyright">
        <p>&copy; 2024 GoTrek. All rights reserved.</p>
      </div>
      </section>
    </div>
  );
}

export default LandingPage;
