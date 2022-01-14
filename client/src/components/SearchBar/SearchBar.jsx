import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search">
      <span className="search__input--text"></span>
      <input
        placeholder="search for anything"
        type="text"
        className="search__input search__input--copy"
      />
      <span className="search__input--location"></span>
      <input
        type="text"
        className="search__input search__input--city"
        defaultValue="Vancouver, BC"
      />
      <span className="search__input--down"></span>
      <input
        type="text"
        className="search__input search__input--hiit"
        defaultValue="HIIT"
      />
    </div>
  );
}
