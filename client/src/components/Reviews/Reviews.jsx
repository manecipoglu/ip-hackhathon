import ReviewCard from "../../components/ReviewCard/ReviewCard";
import "./Reviews.scss";

export default function Reviews({ reviews }) {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Customer Reviews</h2>
      <div className="reviews__container">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <button className="reviews__cta">See All Reviews</button>
    </section>
  );
}
