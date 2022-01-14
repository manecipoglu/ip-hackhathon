import about from "../../assets/heros/hero-about.png";
import "./Description.scss";

export default function Description({ description }) {
  return (
    <section className="description">
      <h2 className="description__title">About the Studio</h2>
      <div className="description__container">
        <img
          src={about}
          alt="instructor giving class"
          className="description__image"
        />
        <p className="description__text">{description}</p>
      </div>
    </section>
  );
}
