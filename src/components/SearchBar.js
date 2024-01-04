import React from "react";

function SearchBar() {
  const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  }
  return (
    <div>
      <div className="SearchBar-sort-options">
        <ul>
          {
            Object.keys(sortingOptions).map(sortingOption => {
              let sortOptionValue = sortingOptions[sortingOption];
              return <li key={sortOptionValue}>{sortingOption}</li>
            })
          }
        </ul>
      </div>
      <input placeholder="Search Businesses" type="text" />
      <input placeholder="Where?" type="text" />
      <button>Let's Go</button>
    </div>
  )

}

export default SearchBar;