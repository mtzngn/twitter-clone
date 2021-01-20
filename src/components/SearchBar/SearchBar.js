import './SearchBar.css';
import {React} from "react"

const SearchBar = () => {
    return (
      <div className="searchbar">
        <i>Icon</i>
        <input placeholder="Search Twitter" id="search"></input>
      </div>
        )
  }

export default SearchBar;