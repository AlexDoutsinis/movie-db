import React from "react";

const Search = () => {
  return (
    <div className="search-box">
      <div className="row">
        <form>
          <i className="fas fa-search" />
          <input type="text" placeholder="Search for a movie" />
        </form>
      </div>
    </div>
  );
};

export default Search;
