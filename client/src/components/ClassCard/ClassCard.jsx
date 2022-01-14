import React, { Component } from "react";
import "./ClassCard.scss";
class ClassCard extends Component {
  render() {
    return (
      <div className="class-card">
        <div className="class-card-img">
          <img
            className="class-card__img"
            //    src={}
            alt="class img"
          />
        </div>
        <div className="class-card-info">
          <h3 className="class-card-info__title">BOOT CAMP</h3>
          <p className="class-card-info__text">
            This class involves intense physical training that builds strength
            and fitness through group intervals over a one hour time period.
          </p>
          <button className="class-card-info__button">Find a time </button>
        </div>
      </div>
    );
  }
}

export default ClassCard;
