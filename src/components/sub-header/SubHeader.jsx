import { useState } from "react";
import "./SubHeader.css";

const SubHeader = () => {

  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleFilterClick = () => {
    setIsFilterActive((current) => !current);
  };
  const handleSearchClick = () => {
    setIsSearchActive((current) => !current);
  };

  return (
    <div className="con">
      <section className="sub-header-container">
        <button className="filter-container" onClick={handleFilterClick}>
          <img src="src/components/sub-header/filter.svg" alt="filter-icon" />
          Filter
        </button>
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </section>
    </div>
  );
};

export default SubHeader;
