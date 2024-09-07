import React, { useEffect } from 'react';
import './styles/Carousel.css';
import img1 from './assets/img1.jpg';
import b2 from './assets/b2.jpg'
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

function Carousel() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExample');
    
    // Set the carousel to cycle automatically every 3 seconds (3000 ms)
    const interval = setInterval(() => {
      // Move to the next slide
      const nextButton = carouselElement.querySelector('.carousel-control-next');
      nextButton.click();
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img2} className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src={b2} className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <div className="carousel-text">
        <h2>Trekking</h2>
        <p>Life is either a daring adventure or nothing.</p>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
