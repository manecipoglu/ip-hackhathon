import { Link } from "react-router-dom";
import "./InstructorCard.scss";

export default function InstructorCard({ title, classes, message, id }) {
  return (
    <Link to={`/instructors/${id}`}>
      <article className="instructor-card">
        <img
          className="instructor-card__img"
          src={require(`../../assets/instructors/${title}.png`)}
          alt="instructor avatar"
        />
        <h3 className="instructor-card__title">{title}</h3>
        <img
          src={require(`../../assets/ratings/${title}.png`)}
          alt="instructor rating"
          className="instructor-card__rating"
        />
        {classes.map((everyClass) => (
          <p key={everyClass} className="instructor-card__classes">
            {everyClass}
          </p>
        ))}
        {message && <p className="instructor-card__message">{message}</p>}
      </article>
    </Link>
  );
}
