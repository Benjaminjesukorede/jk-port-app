import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/WhatsApp Image 12.jpg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="AppleImage" />
      </div>
      <div className="content">
        <p>Your Dream Home Style</p>
        <h1>WELCOME TO JK-FURNITURE STORE</h1>
        <div className="hero-links">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          {/* WhatsApp Icon Link */}
          <a
            href="https://wa.me/2347043121217?text=Hello%20there!" // Replace YOUR_PHONE_NUMBER with your actual number (include country code without '+' sign, e.g., 234XYZ)
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
