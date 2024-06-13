// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#home"><img src="logo.png" alt="logo" className="logo-img" /></a>
            <br />
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="btn">Book Now</button>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <br /><br />
          <ul className="footer__links">
            <li><a href="#footer">Browse Destinations</a></li>
            <li><a href="#footer">Special Offers & Packages</a></li>
            <li><a href="#footer">Room Types & Amenities</a></li>
            <li><a href="#footer">Customer Reviews & Ratings</a></li>
            <li><a href="#footer">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <br /><br />
          <ul className="footer__links">
            <li><a href="#footer">Concierge Assistance</a></li>
            <li><a href="#footer">Flexible Booking Options</a></li>
            <li><a href="#footer">Airport Transfers</a></li>
            <li><a href="#footer">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <br /><br />
          <ul className="footer__links">
            <li><a href="#footer">rayalpark@info.com</a></li>
          </ul>
          <div className="footer__socials">
            <a href="#footer"><img src="facebook.png" alt="facebook" /></a>
            <a href="#footer"><img src="instagram.png" alt="instagram" /></a>
            <a href="#footer"><img src="youtube.png" alt="youtube" /></a>
            <a href="#footer"><img src="twitter.png" alt="twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
