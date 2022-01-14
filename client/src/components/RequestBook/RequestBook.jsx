import React, { Component } from "react";
import "./RequestBook.scss";
import RequestCard from "../RequestCard/RequestCard";

class RequestBook extends Component {
  render() {
    return (
      <div className="request-page">
        <h2 className="request-page__title">Request to Book</h2>
        <RequestCard />
        <div className="footer-button">
          <button className="footer-button__name">Confirm Payment</button>
        </div>
      </div>
    );
  }
}

export default RequestBook;
