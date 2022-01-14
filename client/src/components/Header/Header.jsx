import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <span className="header__logo">Logo</span>
      <SearchBar />
      <div className="header__avatar">Avatar</div>
    </header>
  );
}
