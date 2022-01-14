import React from "react";
import "./RequestCard.scss";
const RequestCard = () => {
  return (
    <div className="request-card">
      <div class="request-left">
        <img
          className="booking-left__img"
          // src=""
          alt="Booking-card img"
        />
      </div>
      <div className="request-info">
        <div className="program-info">
          <h3 className="program-info__title">Program Name: HIT</h3>
          <h3 className="program-info__title">
            Location:Slocan Park 2750 E 29th Ave
          </h3>
          <h3 className="program-info__title">
            Date & Time: Sat 15th,Jan,2022. 10:30-11:30 AM
          </h3>
          <h3 className="program-info__title">Kristina Asher</h3>
        </div>
        <div className="payment-info">
          <div className="card-info">
            <h3 className="card-info__title">Subtotal</h3>
            <h3 className="card-info__title">$20.00</h3>
          </div>
          <div className="card-info">
            <h3 className="card-info__title">Tax</h3>
            <h3 className="card-info__title">$1.40</h3>
          </div>
          <h3 className="card-info__total">$21.40</h3>
          <div className="visa-card">
            <div className="visa-detail">
              <img
                className="visa-detail__img"
                //    src=""
                alt="visa icon"
              />
              <h3 className="visa-detail__no">ending in 1536</h3>
            </div>
            <img
              className="visa-card__icon"
              //    src=""
              alt="sign icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
