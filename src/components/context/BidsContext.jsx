import { createContext, useEffect, useState } from "react";

const BidContext = createContext();

const BidProvider = ({ children}) => {
  const [bid, setbid] = useState([]);

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      bid,
      userId: "65eedef949aaf15adc303069",
      auctionId: "6636962a4e494335e4e911c3",
    }),
  };

  const fetchBid = async () => {
    console.log(bid.stringify + "fetch");
    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/bids/create`,
        options
      );
      const data = await res.json();
      console.log(data);
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

export { BidContext, BidProvider };
