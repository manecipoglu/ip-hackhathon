import React from "react";
import "./OurInstructors.scss";
import InstructorCard from "../InstructorCard/InstructorCard";

const OurInstructors = () => {
  return (
    <section className="our-instructors">
      <div className="instructors-header">
        <h2 className="instructors-header__title">Our Instructors</h2>
      </div>
      <div className="instructor-cards">
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>

      <div className="instructor-button">
        <button className="instructor-button__name">See All Instructors</button>
      </div>
    </section>
  );
};

export default OurInstructors;
