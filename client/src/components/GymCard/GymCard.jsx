import "./GymCard.scss";

export default function GymCard({
  name,
  rating,
  address,
  classes,
  reviewCount,
}) {
  return (
    <article className="gym-card">
      <img src={require(`../../assets/photos/${name}.png`)} alt="gym logo" />
      <section className="gym-card__info">
        <div className="gym-card__container">
          <h2 className="gym-card__title">{name}</h2>
          <img
            src={require(`../../assets/ratings/${name} rating.png`)}
            alt="rating stars"
            className="gym-card__rating"
          />
          <span>{rating}</span>
        </div>
        <p className="gym-card__copy">{address}</p>
        <p className="gym-card__copy">{classes}</p>
        <p className="gym-card__reviews">{reviewCount} reviews</p>
      </section>
    </article>
  );
}
