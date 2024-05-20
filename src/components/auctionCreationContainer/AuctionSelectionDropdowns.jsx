import { useContext, useEffect, useState, useRef } from "react";
import {
  CreateAuctionContext,
  CreateAuctionProvider,
} from "../context/CreateAuctionContext";
import "../auctionCreationContainer/AuctionSelectionDropdowns.css";
import InfoFieldsCreateAuction from "./infoFields/InfoFieldsCreateAuction";
function AuctionSelectionDropdowns() {
  const {
    categories,
    inputData,
    handleInputCategoryChange,
    handleInputFileChange,
    setCelebrity,
    selectedCelebrity,
    setSelectedCelebrity,
  } = useContext(CreateAuctionContext);
  const [celebrityData, setCelebrityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);

  // FETCH API NINJAS START
  const getCelebrity = async (name) => {
    let options = {
      method: "GET",
      headers: { "x-api-key": "EVXs0Tdo4GvAQnEzNgwfEg==pXAm2A6bA2zNwHFl" },
    };

    let url = `https://api.api-ninjas.com/v1/celebrity?name=${name}`; // name

    try {
      let res = await fetch(url, options);
      const data = await res.json();
      // TRYING TO ADD AN ID TO EACH INDEX OF EACH CELEBRITY OBJECT IN THE ARRAY, cant make it to work.
      const celebrityId = data.map((celebrity, index) => ({
        ...celebrity,
        id: index,
      }));

      setCelebrityData(celebrityId);
      localStorage.setItem("celebrity", JSON.stringify(name));
      // setCelebrityData(data.map(item => ({...item, id: uuidv4()})));

      console.log(data); // im logging the fetched data
    } catch (err) {
      console.log(`error ${err}`);
    }
  };

  // when search button is clicked i call the getCelebrity so that it's not called whenever a user types something. This is due to, to many api reqs.
  const searchHandler = async () => {
    if (searchTerm !== "") {
      await getCelebrity(searchTerm);
    } else {
      console.log("This celebrity doesn't exist");
    }
  };
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

  // adding a mousedown instead of click due to have read that it sometimes can be better working due to it is triggerd before any other clickhandlers.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCelebSelect = async (e) => {
    const value = e.target.value;
    await setSelectedCelebrity(value);
    
  }

  useEffect(() => {
    setCelebrity();
  }, [selectedCelebrity]);

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
          <select
            className="category"
            // multiple={true}
            name="categoryList"
            id="category"
            // i had to specifically choose to select index 0 = first in the array for it to stop giving The `value` prop supplied to <select> must be a scalar value if `multiple` is false.
            // value={inputData.categoryList}
            // value={inputCategory.categoryList}
            onChange={handleInputCategoryChange}
          >
            <option value="none">Choose Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* SUBCATEGORY */}
          <select disabled="yes" className="sub-category" id="sub-category">
            <option value="other">Other (UNDER DEVELOPMENT)</option>
          </select>

          {/* CELEBRITY SEARCH */}
          <label className="celebrity-category" id="celebrity-category">
            <input
              type="text"
              name="celebrityName"
              id="celebrityInput"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <select className="celeb-select" onChange={handleCelebSelect}>
              <option>NONE</option>
              {celebrityData.map((celeb) => {
                return (
                  <option key={celeb.id}>
                    {celeb.name}
                  </option>
                )
              })}
            </select>
            <button id="api-btn" typeof="button" onClick={searchHandler}>
              search
            </button>
          </label>
        </div>
        
    </div>
    <div className="svg-container">
       
          <InfoFieldsCreateAuction />
          <div className="svg">
            <svg
              width="368"
              height="872"
              viewBox="0 0 374 872"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_151_74)">
                <path
                  d="M369.467 851.272C369.466 862.356 360.451 871.325 349.367 871.27L24.1904 869.644C13.1636 869.588 4.26188 860.619 4.29049 849.592L6.41895 29.7593C6.44748 18.776 15.3277 9.87086 26.3109 9.81152L185.354 8.95272C189.029 8.93282 192.639 9.92598 195.786 11.823L359.872 110.718C365.877 114.337 369.548 120.837 369.548 127.849L369.467 851.272Z"
                  fill="#363636"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_151_74"
                  x="0.291016"
                  y="0.952637"
                  width="373.256"
                  height="870.317"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_151_74"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_151_74"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
     
    </>
  );
}
export default AuctionSelectionDropdowns;
