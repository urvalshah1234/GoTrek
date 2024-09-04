import React,{useEffect} from "react";
import Navbar from "./Navbar";
import "./styles/Layout.css";
import "./styles/gallery.css";
import Footer from "./Footer";
import coorg from "./assets/coorg.jpg";
import dang from "./assets/dang.jpg";
import hamta from "./assets/hamta.jpg";
import triund from "./assets/triund.jpg";
import img2 from "./assets/img2.jpg";
import rajmachi from "./assets/rajmachi.jpg";
function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <>
      <div className="layout-container">
        <Navbar />
        <br/>
        <br/>
        <br />
        <br />
        {/* Photos Section */}
        <section className="gallery-section">
          <h2 style={{ color: "orange", textAlign: "center" }}>Photos</h2>
          <div className="photos">
            <img src={coorg} alt="coorg" />
            <img src={rajmachi} alt="view" />
            <img src={triund} alt="view" />
            <img src={img2} alt="view" />
            <img src={hamta} alt="view" />
            <img src={dang} alt="view" />
          </div>
        </section>

        {/* Videos Section */}
        <section className="gallery-section">
          <h2 style={{ color: "orange", textAlign: "center" }}>
            Trekking Videos
          </h2>
          <div className="videos">
            <iframe
              src="https://www.youtube.com/embed/R5P6jTCEUjA" // Kedarnath Trek
              title="Kedarnath Trek"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/XRgt4cmKp84" // Manali Trekking Adventure
              title="Manali Trekking Adventure"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/R5P6jTCEUjA"
              title="Kedarnath Trek"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/J85RVzEzWIc" // Jungle Trekking Adventure
              title="Jungle Trekking Adventure"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/NQbQ70nYQpA" // Ladakh Breathtaking Views
              title="Ladakh Breathtaking Views"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/LPkzJhPlT1o" // Ladakh - Chadar Trek
              title="Ladakh - Chadar Trek"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="gallery-section">
          <h2 style={{ color: "orange", textAlign: "center" }}>Blogs</h2>
          <div className="blogs">
            <div className="blog-card">
              <h3>The Ultimate Guide to Trekking in the Himalayas</h3>
              <p>
                The Himalayas are a trekker's paradise, offering some of the
                most stunning and challenging routes in the world. This guide
                covers everything you need to know, from choosing the right trek
                to preparing for high altitudes. Experience the majestic beauty
                of snow-capped peaks, serene valleys, and ancient monasteries as
                you embark on a journey that will test your limits and reward
                your soul.
              </p>
            </div>
            <div className="blog-card">
              <h3>
                Top 10 Must-Have Gear for a Successful Trekking Expedition
              </h3>
              <p>
                Success on the trails often comes down to the gear you carry.
                This blog explores the top 10 essential items that can make or
                break your trekking experience. From the perfect pair of boots
                to a reliable navigation system, we break down what you need to
                stay comfortable, safe, and ready for any challenge nature
                throws your way.
              </p>
            </div>
            <div className="blog-card">
              <h3>
                Exploring the Hidden Gems: Lesser-Known Trekking Destinations
              </h3>
              <p>
                Step off the beaten path and explore some of the most underrated
                trekking destinations. These hidden gems offer solitude,
                stunning views, and an unforgettable experience that will make
                your trek truly unique. Discover trails that lead to untouched
                landscapes, where nature’s beauty remains pristine and
                unspoiled.
              </p>
            </div>
            <div className="blog-card">
              <h3>Trekking for Beginners: How to Start Your Journey</h3>
              <p>
                New to trekking? This blog is your go-to guide for beginners.
                Learn how to choose the right trek, prepare physically and
                mentally, and enjoy the adventure of a lifetime. From selecting
                the perfect trail to understanding the basics of trekking, this
                guide will set you on the path to becoming a confident and
                prepared trekker.
              </p>
            </div>
            <div className="blog-card">
              <h3>The Best Treks for Wildlife Enthusiasts</h3>
              <p>
                Combine your love for nature and trekking with these amazing
                treks that offer a chance to spot unique wildlife. From snow
                leopards to rare birds, these trails are a paradise for animal
                lovers. Explore treks that take you through diverse ecosystems,
                offering a rare glimpse of wildlife in its natural habitat.
              </p>
            </div>
            <div className="blog-card">
              <h3>How to Stay Safe While Trekking in Remote Areas</h3>
              <p>
                Trekking in remote areas can be thrilling but comes with its own
                set of challenges. Learn how to stay safe and prepared with our
                expert tips on navigating isolated trails. From understanding
                the risks to equipping yourself with the right tools and
                knowledge, this guide ensures you can enjoy your trek while
                staying safe and secure.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Gallery;
