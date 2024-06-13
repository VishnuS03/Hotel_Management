import React from 'react';
import './Rooms.css';

const rooms = [
  {
    title: "Deluxe Ocean View",
    description: "Bask in luxury with breathtaking ocean views from your private suite.",
    price: "Starting from ",
    cost:"₹50,000",
    imageUrl: "room-1.jpg", // replace with the actual image path
    link: "#",
  },
  {
    title: "Executive Cityscape Room",
    description: "Experience urban elegance and modern comfort in the heart of the city.",
    price: "Starting from ",
    cost:"₹20,000",
    imageUrl: "room-2.jpg", // replace with the actual image path
    link: "#",
  },
  {
    title: "Family Garden Retreat",
    description: "Spacious and inviting, perfect for creating cherished memories with loved ones.",
    price: "Starting from ",
    cost:"₹1,00,000",
    imageUrl: "room-3.jpg", // replace with the actual image path
    link: "#",
  },
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h1>The Most Memorable Rest Time Starts Here.</h1>
      <br />
      <div className="rooms">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.imageUrl} alt={room.title} className="room-image" />
            <div className="room-details">
              <h2>{room.title}</h2>
              <p>{room.description}</p>
              <p className="price">{room.price}<span>{room.cost}</span></p>
              <a href={room.link} className="book-button">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
