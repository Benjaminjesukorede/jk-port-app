import "./WorkCardStyles.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="some of the work" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
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
    </div>
  );
};

export default WorkCard;