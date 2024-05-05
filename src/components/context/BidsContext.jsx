import { createContext, useEffect, useState } from "react";

const BidContext = createContext();

const AuctionProvider = ({ children }) => {
  const [bid, setbid] = useState([]);

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      startBid: "16000",
      maxBid: "16000",
      userId: "65f2dae72d51386685fd2e7f",
      auctionId: "6636962a4e494335e4e911c3", // kommer senare att bli dynamisk och hämtas från startsidan
    }),
  };

  const fetchBid = async () => {
    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/bids/create`,
        options
      );
      const data = await res.json();
      console.log(data);
      setbid(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };

  return (
    <BidContext.Provider value={{ bid, setbid, fetchBid }}>
      {children}
    </BidContext.Provider>
  );
};

export { BidContext, BidContext };
