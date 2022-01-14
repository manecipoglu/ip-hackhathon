import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-contanier">
      <div className="left-section">
        <div className="footer-section">
          <h3 className="footer-section__title">Browse</h3>
          <div className="footer-options">
            <h3 className="footer-options__select">Map</h3>
            <h3 className="footer-options__select">Class Type</h3>
            <h3 className="footer-options__select">Fitness Type</h3>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-section__title">About</h3>
          <div className="footer-options">
            <h3 className="footer-options__select">About us</h3>
            <h3 className="footer-options__select">Who We Are</h3>
            <h3 className="footer-options__select">Mission</h3>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-section__title">For Businesses</h3>
          <div className="footer-options">
            <h3 className="footer-options__select">List Your Business</h3>
            <h3 className="footer-options__select">FAQ</h3>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h3 className="contact-us__title">Contact Us</h3>
        <h3 className="contact-us__email">contactus@virtufit.com</h3>
        <img
          className="contact-us__logo"
          // src=""
          alt="footer logo"
        />
      </div>
    </div>
  );
};

export default Footer;
