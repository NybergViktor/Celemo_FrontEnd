import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({children}) => {

    // ===========================================================
    // SearchAuctions SECTION ====================================

    const [foundAuctions, setFoundAuctions] = useState([]);
    const [pageNr, setPageNr] = useState("0")

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
          console.log(data);
          setFoundAuctions(data);
          setPageNr("0");
        } catch (err) {
          console.log("err: " + err);
        }
      };

    // END SearchAuctions SECTION ======================================

    return (
        <SearchContext.Provider value={{searchAuctions, foundAuctions, pageNr, setPageNr}}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider };