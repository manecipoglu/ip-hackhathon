import heroMain from "../../assets/heros/hero-main.png";
import logo from "../../assets/logo/orange-theory.png";
import rating from "../../assets/ratings/Kristina Asher.png";
import "./About.scss";

export default function About({ about }) {
  return (
    <section className="about">
      <img src={heroMain} alt="people in the gym" />
      <div className="about__info">
        <img src={logo} alt="logo" className="about__logo" />
        <p className="about__title">
          <span className="about__label">{about.name}</span> Fitness |
          Vancouver, BC
        </p>
        <p className="about__address">{about.fullAddress}</p>
        <p className="about__hours">
          <span className="about__label">Monday - Friday:</span> 5:30am -
          11:00pm
        </p>
        <p className="about__hours">
          <span className="about__label">Saturday - Sunday:</span> 8:00am -
          8:00pm
        </p>
        <p className="about__hours">
          <span className="about__label">Holidays:</span> 8:00am - 8:00pm
        </p>
        <div className="about__contact">
          <p className="about__phone">{about.contact.phone}</p>
          <p className="about__email">{about.contact.email}</p>
        </div>
        <img src={rating} alt="rating" className="about__rating" />
        <div className="about__ctas">
          <button className="about__cta">
            <a href="#classes">Check out our classes</a>
          </button>
          <button className="about__cta">
            <a href="#instructors">Check out our instructors</a>
          </button>
        </div>
      </div>
    </section>
  );
}
