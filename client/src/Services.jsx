import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
    <section id="services" className="service section__container">
      <div className="service__container">
        <div className="service__content">
          <h2 className="section__header">Our Services</h2>
          <ul className="service__list">
            <li><span>&#x1F6D2;</span> Room Service</li>
            <li><span>&#x1F4AA;</span> Gym</li>
            <li><span>&#x1F3CA;</span> Swimming Pool</li>
            <li><span>&#x1F371;</span> Restaurant</li>
          </ul>
        </div>
      </div>

    </section>
    <div class="banner__content">
        <div class="banner__card">
          <h4>25+</h4>
          <p>Properties Available</p>
        </div>
        <div class="banner__card">
          <h4>350+</h4>
          <p>Bookings Completed</p>
        </div>
        <div class="banner__card">
          <h4>600+</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>

  );
};

export default Services;
