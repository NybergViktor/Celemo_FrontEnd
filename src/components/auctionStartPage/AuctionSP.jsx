import "./AuctionSpStyle.css";
import "./Auction.js";

const Auction = () => {
  return (
    <main className="mainContainer">
      <h1>Auctions</h1>
      <section className="auctionContainer">
        <div className="picContainer"></div>
        <div className="infoContainer">
          <ul></ul>
        </div>
      </section>
      
      <script src="Auction.js"></script>;
    </main>
  );
};

export default Auction;
