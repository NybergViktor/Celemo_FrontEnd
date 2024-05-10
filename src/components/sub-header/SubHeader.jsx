import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="con">
      <section className="sub-header-container">
        <button className="filter-container">
          <img src="src/components/sub-header/filter.svg" alt="filter-icon" />
          Filter
        </button>
        <button className="search-button">Search</button>
      </section>
    </div>
  );
};

export default SubHeader;
