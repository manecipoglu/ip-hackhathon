import SearchBar from "../SearchBar/SearchBar";
import account from "../../assets/icons/account.png";
import logo from "../../assets/logo/logo.png";
import hamburger from "../../assets/icons/hamburger.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="avatar" className="header__logo" />
      <SearchBar />
      <div className="header__profile">
        <img src={hamburger} alt="hamburger menu" />
        <img src={account} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}
