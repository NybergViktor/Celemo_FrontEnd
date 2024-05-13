import { useState, useContext, useEffect } from "react";
import "./SubHeader.css";
import { SearchContext } from "../context/SearchContext";
import { EnumContext } from "../context/EnumContext";

const SubHeader = () => {
  const { searchValue, setSearchValue, setPageNr, searchAuctionsNoPaging, searchAuctions, pageNr, pageSize } = useContext(SearchContext);
  const { categories, fetchCategories } = useContext(EnumContext);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isRedoActive, setIsRedoActive] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  // FILTER
  const handleFilterButton = () => {
    setIsFilterActive((current) => !current);
    setIsSearchActive(false);
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    setInputSearch(value);
  };
  const handleFilterClick = () => {
    setSearchValue(inputSearch);
    setInputSearch("");
    setIsFilterActive((current) => !current);
    setIsRedoActive((current) => !current);
    setPageNr(0);
    console.log(`Set category: ` + inputSearch);
  };
  // SEARCH
  const handleSearchButton = () => {
    setIsSearchActive((current) => !current);
    setIsFilterActive(false);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setInputSearch(value);
    console.log(inputSearch);
  };
  const handleSearchClick = () => {
    setSearchValue(inputSearch);
    setInputSearch("");
    setIsSearchActive((current) => !current);
    setIsRedoActive((current) => !current);
    setPageNr(0);
    
  };
  // REDO
  const handleRedoClick = () => {
    setIsRedoActive((current) => !current);
    setPageNr(0);
    setSearchValue("getall");
    searchAuctionsNoPaging(`${searchValue}`) // Only used to get number of pages.
    searchAuctions(`${searchValue}`, pageSize);
    console.log(`Search restored`);
  };
  // LOAD CATEGORIES
  useEffect(() => {
    fetchCategories();
  }, []);

  // useEffect(() => {
  //   setSearchValue("getall");
  // }, [handleRedoClick])

  

  return (
    // MAIN CONTAINER
    <div className="con">
      <section className="sub-header-container">

        {/** FILTER BUTTON CONTAINER */}
        <div className="filter-container">
          <button className="filter-button" onClick={handleFilterButton}>
            <img src="src/components/sub-header/filter.svg" alt="filter-icon" />
            Filter
          </button>

          {/** FILTER DROPDOWN */}
          <div
            className={
              isFilterActive
                ? "filter-dropdown-active"
                : "filter-dropdown-not-active"
            }
          >
            <label className="dd-item dd-cat">Select Category</label>
            <div className="dd-con">
              <select className="dd-select dd-item" onChange={handleFilter}>
                <option value="none">none</option>
                {categories.map((cat, i) => {
                  return (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  );
                })}
              </select>
              <button
                id="search-btn"
                className="dd-item"
                onClick={handleFilterClick}
              >
                Select
              </button>
            </div>
          </div>
        </div>
        {/** END FILTER BUTTON CONTAINER */}

        {/** REDO BUTTON */}
        <button
          className={isRedoActive ? "redo-active" : "redo-not-active"}
          onClick={handleRedoClick}
        >
          <img src="/redo_icon.svg" width="50px" />
        </button>
        {/** END REDO BUTTON */}

        {/** SEARCH BUTTON CONTAINER */}
        <div className="search-container">
          <button className="search-button" onClick={handleSearchButton}>
            Search
          </button>

          <div
            className={
              isSearchActive
                ? "search-dropdown-active"
                : "search-dropdown-not-active"
            }
          >
            <input
              id="search-field"
              className="dd-item"
              placeholder="Enter search term"
              value={inputSearch}
              onChange={handleSearch}
            ></input>
            <button
              id="search-btn"
              className="dd-item"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
        {/** END SEARCH BUTTON CONTAINER */}

      </section>
    </div>
    // END MAIN CONTAINER
  );
};

export default SubHeader;
