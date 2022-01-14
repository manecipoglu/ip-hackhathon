import React from "react";
import "./OurInstructors.scss";
import InstructorCard from "../InstructorCard/InstructorCard";

const OurInstructors = ({ instructors, history }) => {
  return (
    <section className="our-instructors">
      <h2 className="our-classes__title">Our Instructors</h2>

      <div className="our-instructors__cards">
        {instructors.map((instructor) => (
          <InstructorCard
            title={instructor.instructorName}
            key={instructor.id}
            classes={instructor.classes}
            history={history}
            id={instructor.id}
          />
        ))}
      </div>

      <button className="our-instructors__cta">See All Instructors</button>
    </section>
  );
};

export default OurInstructors;
