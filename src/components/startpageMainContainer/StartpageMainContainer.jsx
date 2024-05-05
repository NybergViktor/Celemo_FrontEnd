import React, { useContext, useEffect } from "react";
import "./StartpageMainContainer.css";
import { AuctionContext } from "../context/AuctionContext";
import { SearchContext } from "../context/SearchContext";

const StartpageMainContainer = () => {
  const { allAuctions, fetchAllAuctions } = useContext(AuctionContext);
  const { searchAuctions, foundAuctions, pageNr, setPageNr } = useContext(SearchContext);

  useEffect(() => {
    searchAuctions("", 2);
  }, []);

  return (
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
                <div className="auctionInfoUnderTitle">
                  {auction.title} 
                </div>
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
  );
};

export default StartpageMainContainer;
