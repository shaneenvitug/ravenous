import React, { useState } from "react";
import "./SearchBar.css";
import { search } from "../../utils/api";

function SearchBar() {
  const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  }

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ sortBy, setSortBy ] = useState("best_match");

  const onClickSortByOption = (event) => {
    const sortByOption = event.target.textContent;
    setSortBy(sortingOptions[sortByOption]);
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const onButtonClick = () => {
    search(searchTerm, location, sortBy);
  }
  return (
    <div>
      <div className="SearchBar-sort-options">
        <ul>
          {
            Object.keys(sortingOptions).map(sortingOption => {
              let sortOptionValue = sortingOptions[sortingOption];
              return (
                <li 
                  onClick={onClickSortByOption}
                  className={`SearchBar-list ${sortBy === sortOptionValue ? "active" : ""}`}
                  key={sortOptionValue}
                >
                  {sortingOption}
                </li>
              )
            })
          }
        </ul>
      </div>
      <input onChange={handleSearchTerm} placeholder="Search Businesses" type="text" />
      <input onChange={handleLocation} placeholder="Where?" type="text" />
      <button onClick={onButtonClick}>Let's Go</button>
    </div>
  )

}

export default SearchBar;