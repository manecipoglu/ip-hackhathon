import React, { Component } from "react";
import "./Booking.scss";
import BookingCard from "../BookingCard/BookingCard";

class Booking extends Component {
  render() {
    return (
      <div className="booking-page">
        <h2 className="booking-page__title">
          Thank you for booking with Orangetheory Fitness!
        </h2>
        <div booking-card-container>
          <BookingCard />
        </div>
        <div className="booking-footer">
          <div className="footer-details">
            <h3 className="footer-details__mesg">
              We've send the reservation confirmation to your email!
            </h3>
            <h3 className="footer-details__q">Didn't get the email</h3>
          </div>
          <div className="footer-button">
            <button className="footer-button__name">Go back to GYM Page</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
