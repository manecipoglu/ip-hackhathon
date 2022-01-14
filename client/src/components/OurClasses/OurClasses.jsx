import "./OurClasses.scss";
import ClassCard from "../ClassCard/ClassCard";

export default function OurClasses({ classes }) {
  return (
    <section className="our-classes">
      <h2 className="our-classes__title">Our Classes</h2>

      <div className="our-classes__cards">
        {classes.map((eachClass) => (
          <ClassCard
            title={eachClass.classTitle}
            text={eachClass.description}
            key={eachClass.id}
          />
        ))}
      </div>

      <button className="our-classes__cta">See All Classes</button>
    </section>
  );
}
