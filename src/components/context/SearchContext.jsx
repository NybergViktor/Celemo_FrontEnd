import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  // ===========================================================
  // SearchAuctions SECTION ====================================

  const [foundAuctions, setFoundAuctions] = useState([]);
  const [pageNr, setPageNr] = useState(0);
  const [searchValue, setSearchValue] = useState("getall");
  const [ totalItems, setTotalItems ] = useState(0);

  const searchAuctions = async (search, pageSize) => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      let res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/search/${search}/${pageSize}/page/${pageNr}`,
        options
      );
      if (!res.ok) {
        console.log("No auctions found!");
        setFoundAuctions([]);
        setPageNr(0);
        setPages(0);
        setTotalItems(0);
      } else {
        const data = await res.json();
      setFoundAuctions(data);  
      }
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // END SearchAuctions SECTION ======================================

  //##################################################################
  // Search no paging
  const searchAuctionsNoPaging = async (search) => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/search/${search}`,
        options
      );
      const data = await res.json();  
      setTotalItems(data.length);
      // console.log(data.length) 
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // ===========================================================
  // Page functions SECTION ====================================

  const [pages, setPages] = useState(0);

  // useEffect(() => {
  //   console.log("Updated pageNr: ", pageNr);
  // }, [pageNr]);

  const handleNext = () => {
    if (pageNr < pages - 1) {
      setPageNr(pageNr + 1);
    }
  };

  const handleFirst = () => {
    setPageNr(0);
  };

  const handleLast = () => {
    setPageNr(Math.round(pages) - 1);
  };

  const handleBack = () => {
    if (pageNr > 0) {
      setPageNr(pageNr - 1);
    }
  };

  // END Page functions SECTION ======================================

  return (
    <SearchContext.Provider
      value={{
        searchAuctions,
        foundAuctions,
        pageNr,
        setPageNr,
        handleBack,
        handleNext,
        handleFirst,
        handleLast,
        setPages,
        pages,
        auctionId,
        setAuctionId,
        searchValue, 
        setSearchValue,
        totalItems,
        searchAuctionsNoPaging
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
