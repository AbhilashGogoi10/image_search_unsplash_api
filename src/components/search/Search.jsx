import React, { useContext, useState } from "react";
import "./style.css";
import { ImageContext } from "../../App";

const Search = () => {
 
  const { fetchData, searchValue, setSearchValue} = useContext(ImageContext);

  const product_per_page = 100;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    fetchData(
      `search/photos?page=1&per_page=${product_per_page}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&per_page=${product_per_page}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    
  };

  const handleKeySearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&per_page=${product_per_page}&query=${searchValue}cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
     
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="searchInput"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeySearch}
        />
        <button
          className="searchBtn"
          onClick={handleButtonSearch}
          disabled={!searchValue}
        >
          Search
        </button>

        
      </div>
    </>
  );
};

export default Search;
