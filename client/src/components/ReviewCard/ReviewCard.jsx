import rating from "../../assets/ratings/Kristina Asher.png";
import "./ReviewCard.scss";

export default function ReviewCard({ reviewerName, review, date }) {
  return (
    <article className="review-card">
      <div className="review-card__container">
        <h3 className="review-card__title">{reviewerName}</h3>
        <img
          src={rating}
          alt="customer rating"
          className="review-card__image"
        />
      </div>
      <p className="review-card__date">{date}</p>
      <p className="review-card__copy">{review}</p>
    </article>
  );
}
