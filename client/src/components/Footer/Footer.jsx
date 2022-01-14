import footerLogo from "../../assets/logo/footer-logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3 className="footer__copy footer__copy--title">Browse</h3>
        <h3 className="footer__copy">Map</h3>
        <h3 className="footer__copy">Class Type</h3>
        <h3 className="footer__copy">Fitness Type</h3>
      </div>

      <div className="footer__section">
        <h3 className="footer__copy footer__copy--title">About</h3>
        <h3 className="footer__copy">About us</h3>
        <h3 className="footer__copy">Who We Are</h3>
        <h3 className="footer__copy">Mission</h3>
      </div>

      <div className="footer__section">
        <h3 className="footer__copy footer__copy--title">For Businesses</h3>
        <h3 className="footer__copy">List Your Business</h3>
        <h3 className="footer__copy">FAQ</h3>
      </div>

      <div className="footer__section footer__section--logo">
        <h3 className="footer__copy">Contact Us</h3>
        <h3 className="footer__copy">contactus@virtufit.com</h3>
        <img src={footerLogo} alt="footer logo" className="footer__logo" />
      </div>
    </footer>
  );
};

export default Footer;
