import React, { useContext, useEffect, useState } from "react";
import "./StartpageMainContainer.css";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";

const StartpageMainContainer = () => {

  // STARTPAGE CONTENT STUFF
  const { fetchAllAuctions,  } =
    useContext(AuctionContext);
  const {
    searchAuctions,
    foundAuctions,
    pageNr,
    handleBack,
    handleNext,
    handleFirst,
    handleLast,
    pages,
    setPages,
    searchValue, 
    setSearchValue,
    totalItems,
    searchAuctionsNoPaging
  } = useContext(SearchContext);
  
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    searchAuctionsNoPaging(`${searchValue}`) // Only used to get number of pages.
    searchAuctions(`${searchValue}`, pageSize);
  }, [searchValue])

  useEffect(() => {
    console.log(`items: ` + totalItems);
    setPages(totalItems / pageSize);
  }, [totalItems]);

  useEffect(() => {
    console.log(`pages: ` + pages);
  }, [pages]);

  useEffect(() => {
    searchAuctionsNoPaging(`${searchValue}`) // Only used to get number of pages.
    searchAuctions(`${searchValue}`, pageSize);
  }, [pageNr]);

  const noAuctions = (totalItems) => {
    if (totalItems === 0) {
      return <p id="no-auctions">No auctions found!</p>
    }
  }

  return (
    <>
      {noAuctions(totalItems)}
      {/** STARTPAGE CONTENT */}
      <div className="startpageMainContainer">
        
        {/** ONE AUCTION */}
        
        {foundAuctions.map((auction) => {
          return (
            // AUCTION WHITE BOX

            <div key={auction.id} className="startpageAuctionContainer">
              {/** PICTURE */}
              <div className="auctionPicture">
                <img src={auction.productPhoto} />
              </div>

              {/** AUCTION INFO */}
              <div className="auctionInfo">
                {/** INFO OVER SIDE */}
                <div className="auctionInfoOver">
                  <div className="auctionInfoOverCeleb">
                    <p>{auction.celebrityName}</p>
                  </div>
                  <div className="auctionInfoOverPrice">
                    {auction.currentPrice} kr
                  </div>
                </div>

                {/** INFO UNDER SIDE */}
                <div className="auctionInfoUnder">
                  <div className="auctionInfoUnderTitle">{auction.title}</div>
                  <div className="auctionInfoUnderButton">
                    <button>PLACE BID</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/** END ONE AUCTION */}
      </div>

      {/** FROM BOOTSTRAP */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          

          <li className="page-item middle-item">
            <a className="page-link" href="#" onClick={handleFirst}>
              First
            </a>
          </li>

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={handleBack}
              aria-label="Previous"
            >
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>

          <li className="page-item middle-item disabled">
            <a className="page-link" href="#">
              {pageNr + 1} / {Math.round(pages)}
            </a>
          </li>

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={handleNext}
              aria-label="Next"
            >
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>

          <li className="page-item middle-item">
            <a className="page-link" href="#" onClick={handleLast}>
              Last
            </a>
          </li>

          
        </ul>
      </nav>
    </>
  );
};

export default StartpageMainContainer;
