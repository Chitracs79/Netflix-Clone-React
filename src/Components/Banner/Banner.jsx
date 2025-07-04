import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Banner.css"; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>

      <div className="banner-content-wrapper">
        <Navbar />

        <div className="banner-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Starts at ₹149. Cancel anytime.</p>
          <button>Finish Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
