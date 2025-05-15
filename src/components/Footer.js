import "./FooterStyles.css";
import React from "react";
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTiktok} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"> 
                  <h4><FaHome
                  size={20}
                  style={{color: "#fff",
                  marginRight: "2rem" }}
                  />
                    Lagos, Nigeria
                  </h4>
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
                      jkonlinefurniturestore@gmail.com
                    </h4>
                  </div>
            </div>

            <div className="right">
              <h4>About</h4>
              <p>"At JKOnlineFurnitureStore, we believe that furniture is more than just a piece of decor
                 - it's a reflection of your personality and a haven for your loved ones.
                  Our mission is to craft beautiful, functional, and sustainable furniture that brings
                   warmth and comfort to your home. With a passion for design and a commitment to quality,
                    we've been creating exceptional furniture pieces for years."
                  sIntroducing our well-crafted furniture, a stunning piece of furniture that combines sleek lines, rich textures, and unparalleled comfort. Made from the finest materials and crafted with precision, this [chair/sofa/table/cabinets] is designed to be the centerpiece of your living room. Its elegant design and durable construction ensure that it will be a treasured possession for years to come.
                  Ready to elevate your home with our exceptional furniture pieces? Browse our collection today and discover the perfect piece for your space. Our team is here to help you every step of the way, from design to delivery. Let's create a home that's truly yours.
              </p>
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