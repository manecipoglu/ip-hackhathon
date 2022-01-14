import image from "../../assets/classes/HIIT Training.png";
import instructor from "../../assets/instructors/Kristina Asher.png";
import "./BookingCard.scss";

export default function BookingCard() {
  return (
    <article className="booking-card">
      <img className="booking-card__image" src={image} alt="guy in training" />
      <div className="booking-card__container">
        <p>
          <span className="booking-card__bold">Program Name: </span>HIIT
        </p>
        <p>
          <span className="booking-card__bold">Location: </span>Slocan PArk 2750
          E 29th Ave
        </p>
        <p>
          <span className="booking-card__bold">Date & Time: </span>Sat 15th,
          Jan, 2022. 10:30 - 11:30 AM
        </p>
        <div className="booking-card__wrapper">
          <p>
            <span className="booking-card__bold">Class with:</span>
          </p>
          <img src={instructor} alt="instructor" />
          <p>Kristina Asher</p>
        </div>
      </div>
    </article>
  );
}
