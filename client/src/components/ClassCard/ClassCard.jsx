import "./ClassCard.scss";

export default function ClassCard({ title, text }) {
  console.log(title);
  return (
    <article className="class-card">
      <img
        className="class-card__img"
        src={require(`../../assets/photos/${title}.png`)}
        alt="class img"
      />
      <div className="class-card__info">
        <h3 className="class-card__title">{title}</h3>
        <p className="class-card__text">{text}</p>
        <button className="class-card__cta">Find a time </button>
      </div>
    </article>
  );
}
