import image from "../../assets/classes/HIIT Training.png";
import edit from "../../assets/icons/edit.png";
import visa from "../../assets/icons/visa.png";
import "./PaymentCard.scss";

export default function PaymentCard() {
  return (
    <article className="payment-card">
      <img className="payment-card__image" src={image} alt="guy in training" />
      <div className="payment-card__container">
        <p>
          <span className="payment-card__bold">Program Name: </span>HIIT
        </p>
        <p>
          <span className="payment-card__bold">Location: </span>Slocan PArk 2750
          E 29th Ave
        </p>
        <p>
          <span className="payment-card__bold">Date & Time: </span>Sat 15th,
          Jan, 2022. 10:30 - 11:30 AM
        </p>
        <div className="payment-card__wrapper">
          <div className="payment-card__detail">
            <p className="copy">Subtotal</p>
            <p className="copy">$20</p>
          </div>
          <div className="payment-card__detail">
            <p className="copy">Tax</p>
            <p className="copy">$1.40</p>
          </div>
          <div className="payment-card__detail">
            <p className="total">$21.40</p>
          </div>
          <div className="payment-card__detail">
            <img src={visa} alt="visa card" className="visa" />
            ending in 1536
            <img src={edit} alt="edit icon" className="edit" />
          </div>
        </div>
      </div>
    </article>
  );
}
