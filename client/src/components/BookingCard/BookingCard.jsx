import React from "react";
import "./BookingCard.scss";

const bookingCard = () => {
  return (
    <div className="booking-card">
      <div class="booking-left">
        <img
          className="booking-left__img"
          // src=""
          alt="Booking-card img"
        />
      </div>
      <div className="booking-info">
        <div className="program-info">
          <h3 className="program-info__title">Program Name: HIT</h3>
          <h3 className="program-info__title">
            Location:Slocan Park 2750 E 29th Ave
          </h3>
          <h3 className="program-info__title">
            Date & Time: Sat 15th,Jan,2022. 10:30-11:30 AM
          </h3>
        </div>
        <div claaName="instructor-info">
          <h3 className="instructor-info__title">Class with</h3>
          <img
            className="instructor-info__img"
            // src=""
            alt="instructor img"
          />
          <h3 className="instructor-info__title">Kristina Asher</h3>
        </div>
      </div>
    </div>
  );
};

export default bookingCard;
