import { Link } from "react-router-dom";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import "./PaymentPage.scss";

export default function PaymentPage() {
  return (
    <main className="payment">
      <h2 className="payment__title">Request to Book</h2>
      <div className="payment__card">
        <PaymentCard />
      </div>

      <div className="payment__footer">
        <div className="payment__hidden">
          <p className="payment__copy">
            We've send the reservation confirmation to your email!
          </p>
          <p className="payment__copy payment__copy--confirm">
            Didn't get the email
          </p>
        </div>

        <Link to="/booking">
          <button className="payment__cta">Confirm Payment</button>
        </Link>
      </div>
    </main>
  );
}
