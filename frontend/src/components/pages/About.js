import React,{useEffect} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br/>
      <br/>
      <section className="mission">
        <h3 style={{color:'orange'}}>Our Mission</h3>
        <p>
          Our mission is to provide safe, memorable, and eco-friendly trekking
          experiences that connect people with nature and foster a love for
          adventure.
        </p>
      </section>
      <section className="offer">
        <h3 style={{color:'orange'}}>What we offer?</h3>
        <p>
          <ul>
            <li>
              Guided Trekking Adventures: We offer a range of trekking options
              suitable for all levels, from beginners to experienced hikers. Our
              guided treks include detailed itineraries, safety protocols, and
              the opportunity to explore stunning landscapes with knowledgeable
              guides.
            </li>
            <li>
              Custom Trekking Packages: Whether you're looking for a challenging
              expedition or a leisurely walk through picturesque landscapes, we
              can customize a trekking package to meet your specific needs and
              preferences
            </li>
            <li>
              Group and Solo Treks: We cater to both solo trekkers and groups,
              providing personalized experiences for individuals and organizing
              group adventures that promote camaraderie and teamwork.
            </li>
            <li>
              Training and Preparation: Our pre-trek training programs ensure
              that you are well-prepared for your adventure. We offer advice on
              physical conditioning, gear recommendations, and safety measures.
            </li>
          </ul>
        </p>
      </section>
      <section className="choose">
        <h3 style={{color:'orange'}}>Why choose us?</h3>
        <p>
          <ul>
            <li>
              Expert Guides: Our guides are certified professionals with
              extensive experience in trekking and wilderness navigation. They
              ensure safety, provide insights into the local flora and fauna,
              and enhance your trekking experience.
            </li>
            <li>
              Sustainable Practices: We are committed to protecting the
              environment and promoting sustainable tourism. Our practices
              include Leave No Trace principles, responsible waste management,
              and support for local conservation efforts.
            </li>
            <li>
              Exceptional Customer Service: From the moment you book with us to
              the completion of your trek, we prioritize exceptional customer
              service. Our team is available to assist you with any questions or
              concerns, ensuring a smooth and enjoyable experience.
            </li>
          </ul>
        </p>
      </section>
      <Footer />
    </div>
  );
}
export default About;
