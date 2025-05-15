import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

import Watch from "../assets/WhatsApp Image 15.jpg";
import Ps4 from "../assets/WhatsApp Image 15.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>ABOUT US</h1>
        <p>
          Want to make a request?
          <br />
          <br />
          We are here to help you out.
        </p>
        <div className="button-group">
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2347059391767?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn-link"
          >
            <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Ps4} className="img" alt="Here is an api example" />
          </div>
          <div className="img-stack bottom">
            <img src={Watch} className="img" alt="Here is the code on vs code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
