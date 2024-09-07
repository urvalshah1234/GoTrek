import React from "react";

import "./styles/Activity.css";
import bungee from "./assets/bungee.jpg";
import rafting from "./assets/rafting.jpg";
import paragliding from "./assets/paragliding.jpg";
import safari from "./assets/safari.jpg";
import bike from "./assets/bike.jpg";
function Special() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "orange" }}>Special Activities</span>{" "}
        </h1>
        <p style={{ textAlign: "center"}}>
          Recommended Activities to do by our experts
        </p>
        <div className="activity-section">
          <div className="activity-image">
            <img src={bike} alt="ladakh bike trip" />
          </div>
          <div className="activity-info">
            <h3>Road trip by bike at Ladakh</h3>
            <p>
              Embark on the ultimate adventure with a bike trip to Ladakh, one
              of the most sought-after journeys for thrill-seekers and nature
              lovers alike. Known as the "Land of High Passes," Ladakh offers a
              unique blend of stark landscapes, majestic mountains, and serene
              monasteries, making it a biker's paradise. Riding through Ladakh
              is more than just a trip; it's an experience that challenges both
              your riding skills and your spirit of adventure. The journey
              typically starts from Manali or Srinagar, taking you through some
              of the most breathtaking and challenging terrains in the world.
            </p>
            <p>Timings :- Flexible</p>
            <p>Contact number :- +91 9856347612</p>
          </div>
          <div className="activity-map">
            <iframe
              title="Google Map for Ladakh Bike Trip"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.3246705945533!2d77.58249751620666!3d34.1521991191526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb96e0b6b5eb%3A0x96f99dbe6c6b312a!2sLeh%20Ladakh%2C%20Jammu%20and%20Kashmir%20194101!5e0!3m2!1sen!2sin!4v1669281884812!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="activity-section">
          <div className="activity-image">
            <img src={bungee} alt="Bungee Jumping" />
          </div>
          <div className="activity-info">
            <h3>Bungee Jumping at Rishikesh</h3>
            <p>
              Rishikesh is one of the most popular destinations in India for
              bungee jumping, offering thrill-seekers an adrenaline-pumping
              experience. The jump is conducted from a fixed platform on a
              cliff, 83 meters above the ground, at a location known as Mohan
              Chatti. Operated by trained professionals, the bungee jump in
              Rishikesh is known for its safety standards and breathtaking views
              of the surrounding Shivalik hills and the Ganges River. It's an
              unforgettable adventure, drawing adventurers from all over the
              country.
            </p>
            <p> Timings :- 9:00 am to 5:00 pm </p>
            <p>Contact number :- +91 9856347612</p>
          </div>
          <div className="activity-map">
            <iframe
              title="Google Map for Bungee Jumping"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.8256937960576!2d78.26909731510848!3d30.08522008196522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c01f0055e155b%3A0xb91f23ccf58fdce2!2sMohan%20Chatti%2C%20Rishikesh%2C%20Uttarakhand%20494014!5e0!3m2!1sen!2sin!4v1669281820843!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="activity-section">
          <div className="activity-image">
            <img src={paragliding} alt="Paragliding" />
          </div>
          <div className="activity-info">
            <h3>Paragliding at Manali</h3>
            <p>
              Paragliding in Manali offers an exhilarating flight experience
              with breathtaking views of the Himalayas and the Kullu Valley.
              It’s a popular adventure sport that lets you soar high above the
              picturesque landscape.
            </p>
            <p>
              Participants enjoy a thrilling glide with panoramic views of
              snow-capped peaks, lush forests, and the serene Beas River below.
              Tandem flights with experienced instructors ensure a safe and
              memorable experience.
            </p>
            <p> Timings :- 8:00 am to 6:00 pm </p>
            <p>Contact number :- +91 9253563472</p>
          </div>
          <div className="activity-map">
            <iframe
              title="Google Map for Paragliding"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.185558867529!2d77.18835721510849!3d32.23957558195251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39096fd7244f5ebd%3A0x3df89778a220bce1!2sManali%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1669282042256!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="activity-section">
          <div className="activity-image">
            <img src={rafting} alt="River Rafting" />
          </div>
          <div className="activity-info">
            <h3>River Rafting at Manali</h3>
            <p>
              River rafting in Manali is a thrilling adventure activity set
              against the backdrop of the Himalayas. The Beas River, which flows
              through Manali, offers exciting rapids that range from easy to
              challenging.
            </p>
            <p>
              Participants can enjoy the adrenaline rush of navigating through
              rapids, along with the scenic views of the lush valleys and
              snow-capped peaks of the Himalayas.
            </p>
            <p> Timings :- 8:00 am to 4:00 pm </p>
            <p>Contact number :- +91 8356347612</p>
          </div>
          <div className="activity-map">
            <iframe
              title="Google Map for River Rafting"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.425553192456!2d77.17113701510849!3d32.23057088194144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390969ddaa2d8b59%3A0xd58c7cf93524c8d8!2sBeas%20River%2C%20Manali%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1669281886703!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="activity-section">
          <div className="activity-image">
            <img src={safari} alt="Jungle Safari" />
          </div>
          <div className="activity-info">
            <h3>Jungle Safari at Gir Forest</h3>
            <p>
              Wildlife jungle safaris offer an immersive adventure into the
              heart of nature, where you can observe diverse wildlife in their
              natural habitat. Embark on guided tours through lush forests and
              dense jungles, where you might encounter majestic animals such as
              tigers, elephants, leopards, and various bird species. These
              safaris provide a unique opportunity to experience the thrill of
              wildlife viewing while contributing to conservation efforts. Ideal
              for nature enthusiasts, the experience combines excitement with
              the serene beauty of untamed landscapes.
            </p>
            <p> Timings :- 6:00 am to 4:00 pm </p>
            <p>Contact number :- +91 9856347612</p>
          </div>
          <div className="activity-map">
            <iframe
              title="Google Map for Jungle Safari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.791295214522!2d70.3518123!3d21.1455517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be00f80e31f63af%3A0x96a0ef69115fc1c0!2sGir%20Forest%20National%20Park!5e0!3m2!1sen!2sin!4v1669281973676!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
