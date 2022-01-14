import React from "react";
import "./OurClasses.scss";
import ClassCard from "../ClassCard/ClassCard";

const OurClasses = () => {
  return (
    <section className="our-classes">
      <div className="class-name">
        <h2 className="class-name__title">Our Classes</h2>
      </div>
      <div className="class-cards">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
      <div className="card-button">
        <button className="card-button__name">See All Classes </button>
      </div>
    </section>
  );
};

export default OurClasses;
