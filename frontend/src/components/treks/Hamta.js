import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Carousel.css";
import "../styles/Layout.css";
import "../styles/trek_details.css";
import "../styles/gallery.css";
import coorg from "../assets/coorg.jpg";
import dang from "../assets/dang.jpg";
import hamta from "../assets/hamta.jpg";
import triund from "../assets/triund.jpg";
import img2 from "../assets/img2.jpg";
import rajmachi from "../assets/rajmachi.jpg";
import { FaMountain } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import {
  FaUtensils,
  FaBed,
  FaChalkboardTeacher,
  FaFirstAid,
  FaBus,
  FaReceipt,
} from "react-icons/fa";
import { useState } from "react";

function Hamta() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const sections = [
    {
      title: "Things to Carry",
      content:
        "List of items to carry for the trek: water bottles, snacks, trekking shoes, rain jacket, etc.",
    },
    {
      title: "Cancellation Policy",
      content:
        "Details about the cancellation policy: Refunds, deadlines, and terms.",
    },
    {
      title: "Inclusion and Exclusion",
      content:
        "Inclusions: Meals, accommodation, guide, etc. Exclusions: Personal expenses, insurance, etc.",
    },
    {
      title: "Rent/Purchase for the Trek",
      content: "tents, sleeping bags, etc.",
    },
    {
      title: "How to Reach Basecamp",
      content: "Reach manali and then come here",
    },
    {
      title: "How much fitness you need",
      content: "Must be physically fit",
    },
  ];
  const itinerary = [
    {
      day: "Day 1",
      title:
        "Arrive at GoTrek Jungle Line Campus, Manali by 8.00 am. Drive to Jobra Roadhead, and Trek to Jobra",
      details: [
        "Drive Distance: 27 km | Drive Duration: 1 hour 20 minutes | Pick-up point for GoTrek trekkers: GoTrek Jungle Line Campus, Manali",
        "Trek Distance: 1.5 km | Trek Duration: 1 hour",
        "Get to GoTrek Jungle Line Campus, Manali by 8.00 AM. Start for Jobra immediately after lunch (3 hours drive). The cab fare is not included in the trek fee. It is to be shared by trekkers and paid directly to the driver. It costs Rs 3,200 per vehicle. Trek to Jobra campsite (30-minute trek).",
        "To reach Jungle Line Campus, you can either reach directly or choose the pick-up arranged by GoTrek from Beas Bridge, Manali at 7.00 am. The cost of the cab is Rs 1,000 and has to be shared by trekkers. The vehicles are non-AC.",
      ],
    },
    {
      day: "Day 2",
      title: "Trek from Jobra to Jwara",
      details: [
        "Trek Distance: 4.50 km | Trek Duration: 4 hours | Altitude Gain: 8965 ft to 11005 ft",
      ],
    },
    {
      day: "Day 3",
      title: "Trek from Jwara to Balu Ka Ghera",
      details: [
        "Trek Distance: 5 km | Trek Duration: 4 hours | Altitude Gain: 11005 ft to 12220 ft",
      ],
    },
    {
      day: "Day 4",
      title: "Trek from Balu ka Ghera to Shea Goru via Hampta Pass",
      details: [
        "Trek Distance: 8 km | Trek Duration: 9 hours | Altitude Gain and Loss: 12220 ft to 12695 ft via 14,065 ft",
      ],
    },
    {
      day: "Day 5",
      title: "Trek from Shea Goru to Chhatru",
      details: [
        "Trek Distance: 7 km | Trek Duration: 4.5 hours | Altitude Loss: 12695 ft to 10785 ft",
      ],
    },
    {
      day: "Day 6",
      title:
        "Drive from Chhatru to Manali. Optional: Drive from Chhatru to Chandratal Lake to Manali",
      details: [
        "Drive Distance: 64 km | Drive Duration: 5 hours",
        "Optional: Drive Distance: 160 km total | Drive Duration: 9-10 hours | Altitude Gain: 10,785 ft to 14,036 ft",
        "5 hours drive on an SUV that can accommodate 7 trekkers. The transport cost from Chattru to Manali will be Rs 7,000 per vehicle.",
        "Optional: Visit Chandratal and then return to Manali. 9-10 hour drive. If you choose to visit Chandratal Lake, the transport cost would be Rs 9,000 per vehicle.",
        "Please note: The distance between campsites may vary by 100 meters depending on the weather conditions and the route you take. The altitude may also vary by 100 feet for similar reasons.",
      ],
    },
  ];

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('5');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set a flag to indicate submission in progress

    const reviewData = {
      name,
      review,
      rating: parseInt(rating),
    };

    try {
      const response = await fetch('http://localhost:8000/reviews/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const data = await response.json();
      alert('Review submitted sccessfully')
      console.log('Review submitted successfully:', data);

      // Reset form after successful submission
      setName('');
      setReview('');
      setRating('5');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false); // Reset the submitting flag
    }
  };
  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Hampta Pass</h1>
      </div>
      <br />
      <h3 style={{ textAlign: "center" }}>
        <span
          style={{
            textAlign: "center",
            color: "#b8490e",
            textDecoration: "underline",
          }}
        >
          Hampta Pass{" "}
        </span>{" "}
        - One of the Most Dramatic Crossover Treks in the Himalayas
      </h3>
      <div
        className="info-section"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <div className="info-left" style={{ flex: 2, padding: "20px" }}>
          <ul>
            <li>
              <strong>Elevation and Landscape:</strong>
              <ul>
                <li>
                  Hampta Pass, at 14,000 feet, is one of the dramatic pass
                  crossings in the Himalayas.
                </li>
                <li>
                  On one side of the pass is the lush green valley of Kullu,
                  featuring forests, grasslands, and blooming flowers.
                </li>
                <li>
                  On the other side is the stark, arid landscape of Lahaul, with
                  barren mountains and minimal vegetation.
                </li>
              </ul>
            </li>

            <li>
              <strong>Scenic Contrast:</strong>
              <ul>
                <li>
                  Standing on top of the pass, you see two distinct worlds on
                  either side.
                </li>
                <li>
                  The transition between the two landscapes occurs within
                  minutes.
                </li>
              </ul>
            </li>

            <li>
              <strong>Comparison with Valley of Flowers:</strong>
              <ul>
                <li>
                  Hampta Pass is often compared to Himachal’s Valley of Flowers
                  due to its similar green narrow valley surrounded by
                  snow-covered mountains.
                </li>
                <li>
                  However, Hampta Pass offers an additional bonus with the
                  contrasting view on the other side.
                </li>
              </ul>
            </li>

            <li>
              <strong>Views and Terrain:</strong>
              <ul>
                <li>
                  Upon crossing the pass, trekkers are greeted with the rugged
                  terrain and barren stretches of Spiti Valley.
                </li>
                <li>
                  The area is known for its stark beauty and forget-me-not blue
                  skies.
                </li>
              </ul>
            </li>

            <li>
              <strong>Adventure and Experience:</strong>
              <ul>
                <li>The climb to Hampta Pass is thrilling and adventurous.</li>
                <li>
                  Trekkers experience nervous excitement as they navigate ledges
                  and uncertain paths leading to the pass.
                </li>
              </ul>
            </li>

            <li>
              <strong>Trek Details:</strong>
              <ul>
                <li>The trek spans 6 days and covers a distance of 25 km.</li>
              </ul>
            </li>
          </ul>
          <h5 style={{ textAlign: "center" }}>
            You can join us from Manali campsite
          </h5>
          <br />
          <p style={{ textAlign: "center" }}>
            {" "}
            <button
              onClick={() => {
                navigate("/book_trek");
              }}
              className="Finalize_button"
            >
              Book now!
            </button>
          </p>
        </div>
        <div
          className="info-right"
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "#b8490e" }}>
            Trek Details
          </h4>
          <br />
          <div className="details">
            <div className="detail-item">
              <IoCalendarOutline size={24} />
              <span>Duration: 5-6 Days</span>
            </div>
            <div className="detail-item">
              <FaMountain size={24} />
              <span>Difficulty: Moderate</span>
            </div>
            <div className="detail-item">
              <CiMap size={24} />
              <span>Max Altitude: 14,011 ft</span>
            </div>
            <div className="detail-item">
              <BsPeople size={24} />
              <span>Age Group: 16 to 35 years</span>
            </div>
            <div className="package-card">
              <h3>₹10,000 per person</h3>
              <div className="inclusions">
                <h5>Inclusions:</h5>
                <ul>
                  <li>
                    <FaUtensils className="icon" /> Food
                  </li>
                  <li>
                    <FaBed className="icon" /> Accommodation
                  </li>
                  <li>
                    <FaChalkboardTeacher className="icon" /> Instructor
                  </li>
                  <li>
                    <FaFirstAid className="icon" /> First Aid
                  </li>
                  <li>
                    <FaBus className="icon" /> Travelling
                  </li>
                  <li>
                    <FaReceipt className="icon" /> GST
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="gallery-section">
        <div className="Photos">
          <img src={coorg} alt="coorg" />
          <img src={rajmachi} alt="view" />
          <img src={triund} alt="view" />
          <img src={img2} alt="view" />
          <img src={hamta} alt="view" />
          <img src={dang} alt="view" />
        </div>
      </section>
      <div className="itinerary-container">
        <h1 style={{ color: "#b8490e" }} className="itinerary-title">
          Itinerary of the Trek
        </h1>
        {itinerary.map((item, index) => (
          <div key={index} className="itinerary-day">
            <h2 className="day-title">{item.day}</h2>
            <h3 className="day-heading">{item.title}</h3>
            <ul className="day-details">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="info-section"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <div className="info-left" style={{ flex: 2, padding: "20px" }}>
          <h3 style={{ textAlign: "center", color: "#b8490e" }}>
            Things to know
          </h3>
          <div className="accordion-container">
            {sections.map((section, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleIndex(index)}
                >
                  {section.title}
                </button>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="info-right"
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Campsite</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.127946515817!2d77.19015081487652!3d32.239809780897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39000380e5d2511d%3A0x74392c15e9cb0360!2sIndiahikes%20Jungle%20Line%20Campus!5e0!3m2!1sen!2sin!4v1634517372977!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Manali Campsite"
          ></iframe>
        </div>
      </div>
      <br />
      <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Leave a Review</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <label style={{ color: '#555', fontSize: '16px' }}>Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            fontSize: '14px',
          }}
        />

        <label style={{ color: '#555', fontSize: '16px' }}>Your Review</label>
        <textarea
          placeholder="Write your review here"
          rows="5"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            fontSize: '14px',
            resize: 'none',
          }}
        />

        <label style={{ color: '#555', fontSize: '16px' }}>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            fontSize: '14px',
          }}
        >
          <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
          <option value="4">⭐⭐⭐⭐ - Good</option>
          <option value="3">⭐⭐⭐ - Average</option>
          <option value="2">⭐⭐ - Poor</option>
          <option value="1">⭐ - Terrible</option>
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '12px',
            backgroundColor: '#b8490e',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#f65f0e')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#b8490e')}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div><br />
      <Footer />
    </div>
  );
}

export default Hamta;
