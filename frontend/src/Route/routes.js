import React from "react";
import LandingPage from "../components/LandingPage";
import LoginForm from "../components/loginform/Loginform";
import Layout from "../components/Layout";
import { Routes, Route } from "react-router-dom";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import RegisterForm from "../components/Register";
import Verify from "../components/verify";
import Verify2 from "../components/verify2";
import Tnc from "../components/pages/Tnc";
import Activity from "../components/pages/Activity";
import Dashboard from "../components/pages/Dashboard";
import Profile from "../components/pages/Profile";
import Himachal from "../components/treks/himachal";
import Maharashtra from "../components/treks/Maharashtra";
import Hamta from "../components/treks/Hamta";
import Gallery from "../components/Gallery";
import UpdateProfile from "../components/updated_profile";
import Goa from "../components/treks/Goa";
import Ladakh from "../components/treks/Ladakh";
import Kerala from "../components/treks/Kerala";
import Meghalaya from "../components/treks/Meghalaya";
import NotFound from "../components/NotFound";
import Book from "../components/book";
import Booking from "../components/pages/bookings";
import News from "../components/pages/News";
import Weather from "../components/pages/Weather";
import Packing from "../components/pages/Packing";
import Review from "../components/pages/Review";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />}/>
      <Route path='/verify' element={<Verify />}/>
      <Route path='/forgot' element={<Verify2 />}/>
      <Route path="/home" element={<Layout />} />
      <Route path="/photo" element={<Gallery />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" element={<Profile />}/>
      <Route path='/tnc' element={<Tnc />}/>
      <Route path="/activity" element={<Activity />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/himachal" element={<Himachal />} />
      <Route path="/ladakh" element={<Ladakh />} />
      <Route path="/hamta" element={<Hamta/>}/>
      <Route path="/goa" element={<Goa/>}/>
      <Route path="/kerala" element={<Kerala/>}/>
      <Route path="/Meghalaya" element={<Meghalaya/>}/>
      <Route path="/mh" element={<Maharashtra />} />
      <Route path="/update_profile" element={<UpdateProfile />} /> {/* Add the route here */}
      <Route path='/book_trek' element={<Book/>}/>
      <Route path='/bookings' element={<Booking/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/packing' element={<Packing/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/review' element={<Review/>}/>
    </Routes>
  );
}
export default AppRoutes;
