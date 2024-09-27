import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "./Navbar";
import Info from "./info";
import Info2 from "./info2";
import Carousel from "./Carousel";
import "./styles/Layout.css";
import Footer from "./Footer";
import Trekking from "./Trekking";
import People from "./people_love";
import Weekend from "./Weekend";
import Special from "./Special_event";
import Additional from "./Additional";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0); 
    AOS.init(); 
  }, []);

  return (
    <>
      <div className="layout-container">
        <Navbar />
        <br />
        <br />
        <br />
        <Carousel />
        <br />
        <Info />
        <Trekking />
        <Info2 />
        <Weekend />
        <Additional/>
        <div data-aos="fade-up">
          <Special />
        </div>
        <div data-aos="fade-up">
          <People />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
