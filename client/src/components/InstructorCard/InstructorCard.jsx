import React, { Component } from "react";
import "./InstructorCard.scss";
class InstructorCard extends Component {
  render() {
    return (
      <div className="instructor-card">
        <div className="instructor-card-img">
          <img
            className="instructor-card__img"
            //    src={}
            alt="class img"
          />
        </div>
        <div className="instructor-card-info">
          <h3 className="instructor-card-info__title">Kristina Asher</h3>
          <img
            className="instructor-card-info__rating"
            // src=""
            alt=""
          />
          <p className="class-card-info__text">
            Power Yoga <br />
            HIIT Training <br />
            STRENGTH TRAINING
          </p>
        </div>
      </div>
    );
  }
}

export default InstructorCard;
