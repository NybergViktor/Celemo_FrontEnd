import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="con">
      <section className="sub-header-container">
        <div className="filter-container">
          <div className="filter-button">
            <img src="src/components/sub-header/filter.svg" alt="filter-icon" />
            <a className="filter-label" href="#">
              Filter
            </a>
          </div>
        </div>
        <div className="search-button">
          <a className="search-label" href="#">
            Search
          </a>
        </div>
      </section>
    </div>
  );
};

export default SubHeader;
