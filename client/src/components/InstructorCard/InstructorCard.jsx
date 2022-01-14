import "./InstructorCard.scss";

export default function InstructorCard({ title, classes }) {
  return (
    <div className="instructor-card">
      <img
        className="instructor-card__img"
        src={require(`../../assets/instructors/${title}.png`)}
        alt="instructor avatar"
      />
      <h3 className="instructor-card__title">{title}</h3>
      <img
        src={require(`../../assets/ratings/${title}.png`)}
        alt="instructor rating"
      />
      {classes.map((everyClass) => (
        <p>{everyClass}</p>
      ))}
    </div>
  );
}
