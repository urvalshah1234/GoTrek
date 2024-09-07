import React,{useEffect} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";

function Tnc() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br/>
      
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Terms and Conditions</h1>
      </div>
      <h3 style={{color:'orange'}} >Nature of Events & Activities</h3>
      <p>
        GoTrek is a youth-run Non-Profit Organisation registered under the
        Bombay Public Trust Act 1950 with registration no. E/20483/Ahmedabad.
        GoTrek organizes adventure camping which aims to project young
        people into adventures and Himalayan exploration. Do not consider this
        as a leisure tour and GoTrek as a tour operator. Our idea is purely
        to serve adventure with a heritage touch.
      </p>

      <h3 style={{color:'orange'}} >Discipline</h3>
      <ul>
        <li>
          Being an Adventure Camp and not a leisure tour, we expect a high level
          of discipline.
        </li>
        <li>
          All the participants have to follow the camp rules, timings, and code
          of conduct during the time of camping and travel.
        </li>
        <li>
          Punctuality must be taken as a serious matter. Participants will have
          to follow the instructions clearly given by the volunteer/guide.
        </li>
        <li>
          Misbehavior or arguing with the volunteers/guide/instructors will be
          considered a disciplinary issue.
        </li>
        <li>
          In case of violation of disciplinary rules, GoTrek has all the
          rights to rusticate a participant or terminate the participation. In
          such cases of disciplinary violation or if participants wish to leave
          the camp willingly, the NGO will not be held responsible for any
          further services, return tickets, refunds, etc. Also, GoTrek is
          not responsible for your further actions, safety, or any other actions
          that can affect the locality and jurisdiction.
        </li>
        <li>
          GoTrek will not be responsible for any type of internal disputes
          or quarrels among participants.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Prohibition & Restrictions</h3>
      <ul>
        <li>
          Smoking, Alcohol, Tobacco, Drugs & Abusive Language are strictly
          prohibited.
        </li>
        <li>
          If anyone is found to be a suspect in such cases, participation will
          be terminated, and no further services, return tickets, refunds, etc.,
          will be offered.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Booking & Payments</h3>
      <ul>
        <li>
          Payments are accepted through the online website registration portal by cash at registered offices listed on the
          website.
        </li>
        <li>
          GoTrek does not accept any kind of payment through any 3rd party
          portals, agents, booking offices, mobile applications, etc.
        </li>
        <li>
          If the total camp fees are above 5000, the advance payment will be
          accepted at the registered office in the mode of cash payment only.
        </li>
        <li>
          In case of advance payment, if any modification in schedule or
          planning due to unavoidable circumstances is made, the participant
          will have to agree with it and bear the extra charges with the
          remaining payment.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Communication</h3>
      <ul>
        <li>
          The enquiry and registration helplines will be active between 10 AM to
          7 PM on all days excluding public holidays at +91 9099400699 / +91
          9328000699.
        </li>
        <li>
          However, the information available on the website will be considered
          final in case of any miscommunication or misinterpretation over the
          helplines.
        </li>
        <li>
          In case of any disputes, you can raise a complaint by sending a mail
          to info@invinciblengo.org.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Change Of Schedule</h3>
      <ul>
        <li>
          In case of any unforeseen circumstances, the schedule could be
          changed/modified. In such cases, the expenditure of extra
          accommodation facilities, new transport arrangements, and other
          commodities will have to be borne by the participants themselves. No
          such responsibility would be on the part of Invincible.
        </li>
        <li>
          No refunds would be made or entertained if the organization cancels or
          modifies any programs due to an act of God or any unavoidable
          circumstances.
        </li>
        <li>
          If a trek is called off at the last moment due to a natural calamity
          or unforeseen circumstances (like rains, earthquake, landslides,
          strike, lockdowns, curfews), no amount will be refunded. According to
          the situation, there will be some alternatives provided.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Transportation</h3>
      <ul>
        <li>
          Transportation is managed as per head seat availability. The
          organization will help to adjust, However, we don’t offer any kind of
          seating preferences or special services.
        </li>
        <li>
          Train tickets are booked subject to availability. GoTrek does not
          possess a right to change the status for waiting or RAC tickets.
          However, pre mention of the status will be conveyed to participants
          while booking tickets.
        </li>
        <li>
          In case of unforeseen circumstances such as getting stuck at a place
          due to natural calamity, unable to board the transport vehicle on
          schedule, etc.; the expenditure of extra accommodation facilities, new
          transport arrangements, etc., will have to be borne by the
          participants themselves. No such responsibility would be on the part
          of Invincible.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Accommodation & Food</h3>
      <ul>
        <li>
          Accommodation & Sanitary Facilities for Girls & Boys are separate.
        </li>
        <li>
          Jain and Swaminarayan food will be available at the campsite. Non-Veg
          food is not allowed at the campsite.
        </li>
        <li>
          GoTrek has a pre-decided food menu depending upon the camp hygiene
          and health. No choices, preferences, or demands from the participants
          will be entertained. GoTrek is not responsible for any
          health-related issue during the camp, in case the participant skips
          the food.
        </li>
        <li>
          Before check-in/check-out, the participant is requested to check
          his/her room/tents. If any items are found to be damaged/lost/stolen
          from their room/tents, he/she will be held solely responsible for it
          and needs to bear the expenditure for the same.
        </li>
        <li>
          Before boarding the vehicle, the participant needs to check their
          vehicle seats/windows. In case of damage, he/she must inform the
          respective volunteer/instructor. If not informed and found damaged,
          the participant needs to pay the repairing cost for the same.
        </li>
      </ul>

      <h3 style={{color:'orange'}} >Cancellation & Refund</h3>
      <ul>
        <li>
          Cancellation would be granted by the Senior Registration Manager or
          Higher Authorities on receiving cancellation requests through the
          website. The cancellation Amount will be counted on total camp fees
          only.
        </li>
        <li>
          In case of refund, transaction charges are not refundable by
          banks/payment gateways.
        </li>
        <li>
          The refund amount will be paid in 7 to 12 working days directly into
          the bank account.
        </li>
        <li>
          Cancellation Amount will be as per the following (the percentage shows
          the amount on total camp fees):
          <ul>
            <li>For Local Camps in Gujarat</li>
            <ul>
              <li>Before more than 15 days of Departure, 10%</li>
              <li>Before 2 to 15 days of Departure, 50%</li>
              <li>In the last 48 hours of Departure & After depart, 90%</li>
            </ul>
            <li>For National Camps in the Other States</li>
            <ul>
              <li>Before more than 40 days of Departure, 10%</li>
              <li>Before 21 to 40 days of Departure, 25%</li>
              <li>Before 11 to 20 days of Departure, 40%</li>
              <li>Before 2 to 10 days of Departure, 60%</li>
              <li>In the last 48 hours of Departure, 90%</li>
            </ul>
          </ul>
        </li>
      </ul>

      <h3 style={{color:'orange'}} >How to Cancel Your Booking for Any Camp/Event</h3>
      <ul>
        <li>Login to our Website & then go to your Dashboard.</li>
        <li>Find your upcoming camp for which you are cancelling.</li>
        <li>Click on Cancellation Request & fill the form.</li>
        <li>Mention your reason for cancelling your Camp.</li>
        <li>Submit Your Cancellation Request.</li>
        <li>
          Cancellation Team will be calling you regarding your cancellation
          within 48 working hours.
        </li>
        <li>
          After Cancelled your Booking, you will get your refund by account in 7
          to 12 working days.
        </li>
      </ul>
      <Footer />
    </div>
  );
}
export default Tnc