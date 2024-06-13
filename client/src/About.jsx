import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <section id="about" className="section__container about__container">
      
      <div className="about__image">
        <img src="about.jpg" alt="About Us" />
      </div>
      <div className="about__content">
        <h1 className="section__header">The Best Holidays Start Here! </h1>
        <p className="section__description">With a focus on 
        quality accommodations, personalized experiences, and seamless booking, our platform is
        dedicated to ensuring that every traveler embarks on their dream holiday with confidence and excitement.</p>
        <button type="submit" className="btn">Book Now</button>
      </div>
    </section>
  );
};

export default About;