import React from "react";
import BookingForm from "./BookingForm";
import About from "./About";
import Rooms from "./Rooms";
import Services from "./Services";
import Explore from "./Explore";
import Footer from "./Footer";
import "./index.css";

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="nav__bar">
          <div className="logo">Hotel M</div>
          <ul className="nav__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav__auth">
            <a href="/Signup">Login/Signup</a>
          </div>
        </div>
        <div className="header__content">
            <p>Simple - Unique - Friendly</p>
          <h1>Make Yourself At Home </h1>
          <h1> In Our <span>Hotel</span>.</h1>
        </div>
      </header>
      <BookingForm />
      <About />
      <Rooms />
      <Services />
      <Explore />
      <Footer />
    </div>
  );
}

export default Home;
