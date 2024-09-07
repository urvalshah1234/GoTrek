import React, { useEffect } from "react";
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
        <br />
        <br />
        <br />
        <div className="dashboard-banner">
          <h1 className="dashboard-title">Gallery</h1>
        </div>
        {/* Photos Section */}
        <section className="gallery-section">
          <h2 style={{ color: "#b8490e", textAlign: "center" }}>Photos</h2>
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
          <h2 style={{ color: "#b8490e", textAlign: "center" }}>
            Trekking Videos
          </h2>
          <div className="videos">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_e8BFrAPedM?si=bfRo8lZ0NzS2qCJW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/A1OX7Aun72A?si=9uTXlnrV6SM42NFr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZV8jeAkDFEo?si=lp-79XnCYRetdaXT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rmuuxRaCSH0?si=m0duN25fj4N166ig"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pwEqaA8ewWw?si=s_89chObPvCSdTpz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hFh0l7rn-LU?si=OHNZi2TSpYvvP7Rb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="gallery-section">
          <h2 style={{ color: "#b8490e", textAlign: "center" }}>Blogs</h2>
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
