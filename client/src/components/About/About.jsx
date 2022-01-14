import heroMain from "../../assets/heros/hero-main.png";
import logo from "../../assets/logo/orange-theory.png";
import rating from "../../assets/ratings/Kristina Asher.png";
import "./About.scss";

export default function About({ about }) {
  return (
    <section className="about">
      <img src={heroMain} alt="people in the gym" />
      <div className="about__info">
        <img src={logo} alt="logo" />
        <p className="about__title">{about.name} Fitness | Vancouver, BC</p>
        <p className="about__address">{about.fullAddress}</p>
        <p className="about__hours">Monday - Friday: 5:30am - 11:00pm</p>
        <p className="about__hours">Saturday - Sunday: 8:00am - 8:00pm</p>
        <p className="about__hours">Holidays: 8:00am - 8:00pm</p>
        <div className="about__contact">
          <p className="contact__info contact__info--phone">
            {about.contact.phone}
          </p>
          <p className="contact__info contact__info--email">
            {about.contact.email}
          </p>
        </div>
        <img src={rating} alt="rating" />
        <div className="about__ctas">
          <button className="about__cta">Check out our classes</button>
          <button className="about__cta">Check out our instructors</button>
        </div>
      </div>
    </section>
  );
}
