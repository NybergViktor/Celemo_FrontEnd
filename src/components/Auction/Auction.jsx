import React from "react";
import "../Auction/AuctionStyle.css";

 import AuctionContext from "../context/AuctionContext";
 import { useContext } from "react";

export const Auction = () => {

   const {handleGetAuction} = useContext(AuctionContext);

  return (
    <main>
      <div className="auction-container">
        <div className="img-container">
          <img src="src/components/Auction/mj.jpeg" alt="shoes" />
        </div>
        <div className="info-container">
          <button onClick={handleGetAuction}>get auction</button>
          <div className="celeb">
            <p>Michael jackson</p>
          </div>
          <div className="auction-title">Shoes from 1988</div>
          <div className="description">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque, sint itaque! Placeat distinctio, repellat. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dicta aperiam, commodi
            libero nulla accusamus ipsam vitae voluptas eum iure enim harum
            consequuntur exercitationem quae assumenda necessitatibus, odit,
            officia nisi repellat!
          </div>
          
          <div className="location">London</div>
          <div className="seller">
            <div>@Gittan</div>
            <button>Reviews</button>
          </div>
        </div>
        <div className="blankWhite"></div>
      </div>
      
    </main>
  );
};
