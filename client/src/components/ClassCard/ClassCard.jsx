import React, { Component } from "react";
import "./ClassCard.scss";

class ClassCard extends Component {
  render() {
    return (
      <div className="class-card">
        <div className="class-card-img">
          <img
            className="class-card__img"
            src={require(`../../assets/photos/${this.props.title}.png`)}
            alt="class img"
          />
        </div>
        <div className="class-card-info">
          <h3 className="class-card-info__title">{this.props.title}</h3>
          <p className="class-card-info__text">{this.props.text}</p>
          <button className="class-card-info__button">Find a time </button>
        </div>
      </div>
    );
  }
}

export default ClassCard;
