import React, { useContext, useEffect, useState } from "react";
import "./StartpageMainContainer.css";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";
import { Link } from "react-router-dom";

const StartpageMainContainer = () => {
  const inputRef = React.useRef(null);

<<<<<<< HEAD
  // STARTPAGE CONTENT STUFF
=======
  const { fetchAllAuctions, totalItems } = useContext(AuctionContext);

>>>>>>> b9b4abc83193615fe8369202923bda97aeb08509
  const {
    fetchAllAuctions,
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
<<<<<<< HEAD
    searchValue,
    setSearchValue,
    totalItems,
    searchAuctionsNoPaging,
  } = useContext(SearchContext);

=======
  } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("getall");
>>>>>>> b9b4abc83193615fe8369202923bda97aeb08509
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
<<<<<<< HEAD
    searchAuctionsNoPaging(`${searchValue}`); // Only used to get number of pages.
    searchAuctions(`${searchValue}`, pageSize);
  }, [searchValue]);

  useEffect(() => {
    console.log(`items: ` + totalItems);
=======
    console.log(totalItems + " totalItems");
>>>>>>> b9b4abc83193615fe8369202923bda97aeb08509
    setPages(totalItems / pageSize);
  }, [totalItems]);

  useEffect(() => {
    console.log(pages);
  }, [pages]);

  useEffect(() => {
<<<<<<< HEAD
    searchAuctionsNoPaging(`${searchValue}`); // Only used to get number of pages.
    searchAuctions(`${searchValue}`, pageSize);
  }, [pageNr]);

  const noAuctions = (totalItems) => {
    if (totalItems === 0) {
      return <p id="no-auctions">No auctions found!</p>;
    }
  };

=======
    fetchAllAuctions();
    searchAuctions(`${searchValue}`, pageSize);
  }, []);

  useEffect(() => {
    fetchAllAuctions();
    searchAuctions(`${searchValue}`, pageSize);
  }, [pageNr]);

>>>>>>> b9b4abc83193615fe8369202923bda97aeb08509
  return (
    <>
      <div className="startpageMainContainer">
        {/** ONE AUCTION */}
<<<<<<< HEAD

=======
>>>>>>> b9b4abc83193615fe8369202923bda97aeb08509
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
