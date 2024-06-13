import React from "react";

const BookingForm = () => {
  return (
    <div className="booking__container">
      <form className="booking__form">
        <div className="input__group">
          <label htmlFor="checkin">Check-in</label>
          <input type="date" id="checkin" />
        </div>
        <div className="input__group">
          <label htmlFor="checkout">Check-out</label>
          <input type="date" id="checkout" />
        </div>
        <div class="input__group">
            <label for="guest">GUEST</label>
            <input type="text" placeholder="Guest" />
        </div>
        <button type="submit" className="btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
