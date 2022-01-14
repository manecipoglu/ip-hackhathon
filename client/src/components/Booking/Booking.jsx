import { Link } from "react-router-dom";
import "./Booking.scss";
import BookingCard from "../BookingCard/BookingCard";

export default function Booking() {
  return (
    <main className="booking">
      <h2 className="booking__title">
        Thank you for booking with Orangetheory Fitness!
      </h2>
      <div className="booking__card">
        <BookingCard />
      </div>

      <div className="booking__footer">
        <div>
          <p className="booking__copy">
            We've send the reservation confirmation to your email!
          </p>
          <p className="booking__copy booking__copy--confirm">
            Didn't get the email
          </p>
        </div>

        <Link to="/gyms/90ac3319-70d1-4a51-b91d-ba6c2464408c">
          <button className="booking__cta">Go back to Gym Page</button>
        </Link>
      </div>
    </main>
  );
}
