import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState, useRef } from "react";
import {
  CreateAuctionContext,
  CreateAuctionProvider,
} from "../context/CreateAuctionContext";
import "../auctionCreationContainer/AuctionSelectionDropdowns.css";
import FrameBottom from "./FrameBottom";
import PublishButton from "./PublishButton";

function AuctionSelectionDropdowns() {
  const { categories } = useContext(CreateAuctionContext);
  const [celebrityData, setCelebrityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const containerRef = useRef(null);
  // const [isFilterActive, setIsFilterActive] = useState(false);

  // FILTER
  // const handleFilterButton = () => {
  //   setIsFilterActive((current) => !current);
  // };

  // if data is not clear, setCelebrityData to clear.
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setCelebrityData([]);
    }
  };
  // takes the new value and updates the state
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // FETCH API NINJAS START
  const getCelebrity = async (name) => {
    let options = {
      method: "GET",
      headers: { "x-api-key": "EVXs0Tdo4GvAQnEzNgwfEg==pXAm2A6bA2zNwHFl" },
    };

    let url = "https://api.api-ninjas.com/v1/celebrity?name=" + name; // name

    try {
      let res = await fetch(url, options);
      const data = await res.json();
      // TRYING TO ADD AN ID TO EACH INDEX OF EACH CELEBRITY OBJECT IN THE ARRAY, cant make it to work.
      const celebrityId = data.map((celebrity, index) => ({
        ...celebrity,
        id: index,
      }));
      setCelebrityData(celebrityId);
      localStorage.setItem(data, name);
      // setCelebrityData(prevData => [...prevData, ...celebrityId]);                                      // setCelebrityData(data.map(item => ({...item, id: uuidv4()})));
      console.log(data); // Log the fetched data
    } catch (err) {
      console.log(`error ${err}`);
    }
  };

  // LOAD
  // when search button is clicked i call the getCelebrity so that it's not called whenever a user types something. This is due to, to many api reqs.
  const searchHandler = () => {
    if (searchTerm !== "") {
      getCelebrity(searchTerm);
    } else {
      return console.log("wrong input");
    }
  };
  // adding a mousedown instead of click due to have read that it sometimes can be better working due to it is triggerd before any other clickhandlers.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="svg1">
          <svg
            width="368"
            height="410"
            viewBox="0 0 363 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.9543 8.9543 0 20 0H343C354.046 0 363 8.95431 363 20V391.717C363 407.467 345.639 417.037 332.321 408.627L195.28 322.089C192.084 320.071 188.382 319 184.602 319H20C8.95432 319 0 310.046 0 299V20Z"
              fill="#363636"
            />
          </svg>
        </div>
        <div className="selection-container-top">
          <div className="selection-dropdown-top">
            <div className="title-h1">
              <h2 className="title-text">Create Auction</h2>
            </div>

            <select className="category" id="category">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>

            <select className="sub-category" id="sub-category">
              <option value="other">Other</option>
            </select>

            <label className="celebrity-category" id="celebrity-category">
              <input
                type="text"
                name="celeb"
                id="celebrityInput"
                value={searchTerm}
                onChange={handleInputChange}
              />

              <button id="api-btn" typeof="button" onClick={searchHandler}>
                search
              </button>
            </label>

            {celebrityData.map((data) => {
              return (
                <div
                  className="output-container show"
                  key={data.id}
                  ref={containerRef}
                >
                  <div className="p-container">
                    <div id="select">
                      <p>
                        Name: {data.name} <br />
                        Occupation:{" "}
                        {data.occupation && data.occupation.length > 0
                          ? data.occupation[0]
                          : "Not available"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <FrameBottom />
        <PublishButton>Publish Auction</PublishButton>
      </div>
    </>
  );
}
export default AuctionSelectionDropdowns;

{
  /** FILTER DROPDOWN */
}
{
  /* <div
            className={
              isFilterActive
                ? "filter-dropdown-active"
                : "filter-dropdown-not-active"
            }
          >
            <label className="dd-item dd-cat">Select Category</label>
            <div className="dd-con">
              <select className="dd-select dd-item" onChange={handleInputChange}>
                <option value="">none</option>
                {celebrityData.map((data) => {
                  return (
                    <option key={data} value={celebrityData}>
                      {cat}
                    </option>
                  );
                })}
              </select>
              <button
                id="search-btn"
                className="dd-item"
                onClick={searchHandler}
              >
                Select
              </button>
            </div>
          </div> */
}
{
  /** END FILTER BUTTON CONTAINER */
}

{
  /* <div style={{ color: "white" }}>
              {celebrityData.map((data) => (
                <p key={data}>
                  Name: {data.name}
                  <br></br>
                  Occupation: {data.occupation[0]}
                </p>
              ))}
            </div> */
}
