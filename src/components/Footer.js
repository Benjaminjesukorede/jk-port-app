import "./FooterStyles.css";
import React from "react";
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTiktok} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:
                  "#fff", marginRight: "2rem" }} />
                  <div>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
                  <div className="phone">
                    <h4><FaPhone 
                    size={20} 
                    style={{color: "#fff", 
                    marginRight: "2rem" }}
                       />
                    +2347059391767
                    </h4>
                  </div>
                  <div className="email">
                    <h4>
                      <FaMailBulk
                        size={20}
                        style={{color: "#fff",
                        marginRight: "2rem" }}
                      />
                      benjaminjesukorede@gmail.com
                    </h4>
                  </div>
            </div>

            <div className="right">
              <h4>About Benjamin?</h4>
              <p>I believe I’m the best person for the job because I have a strong foundation in React and a deep understanding of building scalable and efficient web applications.
                As an intermediate React programmer, I have hands-on experience with hooks, state management (such as Redux or Context API), and optimizing performance. 
                I’m also a quick learner, constantly improving my skills by staying up-to-date with the latest React features and best practices. 
                My problem-solving mindset and ability to work collaboratively make me a valuable asset to any development team.</p>
              <div>
                <FaFacebook
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />
                <FaTiktok
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />
                <FaInstagram
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />

              </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;