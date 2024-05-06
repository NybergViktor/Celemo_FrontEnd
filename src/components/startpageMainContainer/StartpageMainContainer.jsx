import React, { useContext, useEffect, useState } from "react";
import "./StartpageMainContainer.css";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";

const StartpageMainContainer = () => {
  const { fetchAllAuctions, totalItems } =
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
  } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    console.log(totalItems);
    setPages(totalItems / pageSize);
  }, [totalItems]);

  useEffect(() => {
    console.log(pages);
  }, [pages]);

  useEffect(() => {
    fetchAllAuctions();
    searchAuctions(`${searchValue}`, pageSize);
  }, []);

  useEffect(() => {
    fetchAllAuctions();
    searchAuctions(`${searchValue}`, pageSize);
  }, [pageNr]);

  return (
    <>
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
                    <button>Place Bid</button>
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
        <ul class="pagination">
          

          <li class="page-item middle-item">
            <a class="page-link" href="#" onClick={handleFirst}>
              First
            </a>
          </li>

          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={handleBack}
              aria-label="Previous"
            >
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>

          <li class="page-item middle-item disabled">
            <a class="page-link" href="#">
              {pageNr + 1} / {pages}
            </a>
          </li>

          <li class="page-item">
            <a
              class="page-link"
              href="#"
              onClick={handleNext}
              aria-label="Next"
            >
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>

          <li class="page-item middle-item">
            <a class="page-link" href="#" onClick={handleLast}>
              Last
            </a>
          </li>

          
        </ul>
      </nav>
    </>
  );
};

export default StartpageMainContainer;
