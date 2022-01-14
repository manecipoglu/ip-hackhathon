import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search">
      <input
        placeholder="search for anything"
        type="text"
        className="search__input search__input--copy"
      />
      <input
        type="text"
        className="search__input search__input--city"
        value="Vancouver, BC"
      />
      <input type="text" className="search__input search__input--hiit" />
    </div>
  );
}
