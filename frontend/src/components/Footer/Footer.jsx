import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quibusdam minima, possimus sequi assumenda reiciendis, nulla tempora
            distinctio quis deleniti vel. Quam, facere nostrum delectus rem
            laboriosam minus assumenda fuga.
          </p>
          <div className="footer-social-icons">
            <Link to="https://www.facebook.com/">
              <img src={assets.facebook_icon} alt="" />
            </Link>
            <Link to="https://x.com/">
              <img src={assets.twitter_icon} alt="" />
            </Link>
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-212-456-4766</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
