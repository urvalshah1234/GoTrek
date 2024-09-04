import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/UpdateProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Book() {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{textAlign:'center'}}>
      <h1>Dekho ye jo trek hai vo tumhare bas ka nahi, pura to kar nahi paaoge tum</h1>
      <h1>Pehle physically fit ho jaao fir aana thik hai</h1>
      <h1>Abhi ke liye tata,bye-bye,good-night</h1>
        <br/>
        <h1>So jaao jaake chup chap</h1>
        </div>
      <Footer />
      
    </>
  );
}

export default Book;
