import React, { useContext, useEffect, useState } from "react";
import "./StartpageMainContainer.css";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";
import { Link } from "react-router-dom";


const StartpageMainContainer = () => {
  const inputRef = React.useRef(null);

  const { fetchAllAuctions, totalItems } = useContext(AuctionContext);
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
    auctionId,
    setAuctionId,
  } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("getall");
  const [pageSize, setPageSize] = useState(2);

  console.log(auctionId + " auction id console");

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

            <Link
              key={auction.id}
              className="startpageAuctionContainer"
              ref={inputRef}
              onClick={() => setAuctionId(auction.id)}
              to={`/auction/find-one/${auction.id}`}
            >
              
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
            </Link>
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
