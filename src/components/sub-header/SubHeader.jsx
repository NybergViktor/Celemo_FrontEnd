import { useState, useContext } from "react";
import "./SubHeader.css";
import { SearchContext } from "../context/SearchContext";

const SubHeader = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext); 
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [inputSearch, setInputSearch ] = useState("");

  const handleFilterButton = () => {
    setIsFilterActive((current) => !current);
  };
  const handleSearchButton = () => {
    setIsSearchActive((current) => !current);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setInputSearch(value);
    console.log(inputSearch);
  }
  const handleSearchClick = () => {
    setSearchValue(inputSearch);
    setInputSearch("");
    setIsSearchActive((current) => !current);
  }

  return (
    <div className="con">
      <section className="sub-header-container">

        
          <div  className="filter-container">
          <button className="filter-button" onClick={handleFilterButton}>
            <img src="src/components/sub-header/filter.svg" alt="filter-icon" />
            Filter
          </button>

          <div className={isFilterActive ? "filter-dropdown-active" : "filter-dropdown-not-active"}>
            <select className="dd-select dd-item" >
              <option>Select category</option>
              <option>Hockey</option>
              <option>Music</option>
            </select>
            <button id="search-btn" className="dd-item">Set</button>
          </div>
          </div>
        
          <div  className="search-container">
          <button className="search-button" onClick={handleSearchButton}>
            Search
          </button>

          <div className={isSearchActive ? "search-dropdown-active" : "search-dropdown-not-active"}>
            <input id="search-field" 
              className="dd-item" 
              placeholder="Enter search term" 
              value={inputSearch} 
              onChange={handleSearch}>
              </input>
            <button id="search-btn" className="dd-item" onClick={handleSearchClick} >Search</button>
          </div>
          </div>
          

      </section>
    </div>
  );
};

export default SubHeader;
