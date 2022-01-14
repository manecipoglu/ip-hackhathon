import { Link } from "react-router-dom";
import "./InstructorClassCard.scss";

export default function InstructorClassCard({ title, description, available }) {
  return (
    <article className="instructor-class">
      <img
        className="instructor-class__img"
        src={require(`../../assets/classes/${title}.png`)}
        alt="class"
      />
      <section className="instructor-class__info">
        <p className="instructor-class__copy">
          <span className="instructor-class__title">Progam Name: </span>
          {title}
        </p>
        <p className="instructor-class__copy">
          <span className="instructor-class__title">Location: </span>
          Slocan Park 2750 E 29th Ave
        </p>
        <p className="instructor-class__copy">
          <span className="instructor-class__title">Date & Time: </span>
          Sat 15th, Jan, 2022. 10:30 - 11:30 AM
        </p>
        <p className="instructor-class__copy">
          <span className="instructor-class__title instructor-class__title--description">
            Description:{" "}
          </span>
          {description}
        </p>
      </section>
      <div className="instructor-class__button">
        <Link to="/payment">
          <button className="instructor-class__cta">Book</button>
        </Link>
        <p className="instructor-class__spots">{available} Spots available</p>
      </div>
    </article>
  );
}
