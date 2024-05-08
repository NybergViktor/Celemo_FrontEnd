import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {

  // ===========================================================
  // SearchAuctions SECTION ====================================

  const [foundAuctions, setFoundAuctions] = useState([]);
  const [pageNr, setPageNr] = useState(0);
  

  const searchAuctions = async (search, pageSize) => {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        search: `${search}`,
        pageSize: `${pageSize}`,
      }),
    };

    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/search/page/${pageNr}`,
        options
      );
      const data = await res.json();
      setFoundAuctions(data);      
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // END SearchAuctions SECTION ======================================

  // ===========================================================
  // Page functions SECTION ====================================

  const [ pages, setPages ] = useState(0);

  useEffect(() => {
    console.log("Updated pageNr: ", pageNr);
  }, [pageNr]);

  const handleNext = () => {
    if (pageNr < pages - 1) {
      setPageNr(pageNr + 1);
    }
  };

  const handleFirst = () => {
    setPageNr(0);
  };

  const handleLast = () => {
    setPageNr(pages - 1);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
