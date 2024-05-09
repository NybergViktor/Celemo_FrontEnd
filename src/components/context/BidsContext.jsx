import { createContext, useEffect, useState } from "react";

const BidContext = createContext();

const BidProvider = ({ children }) => {
  const [startBid, setStartBid] = useState();
  const [maxBid, setMaxBid] = useState();

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      startBid: `${startBid}`,
      maxBid: `${maxBid}`,
      userId: "65eeddd849aaf15adc303068",
      auctionId: "6636962a4e494335e4e911c3",
    }),
  };

  const fetchBid = async () => {
    try {
    let res = await fetch(
      `${import.meta.env.VITE_API_URL}/bids/create`,
      options
    );

    const data = await res.json();
    console.log(JSON.stringify(data + " data"));
    
    } catch (err) {
      console.log("err: " + err);
    }
  };

  return (
    <BidContext.Provider
      value={{
        startBid,
        setStartBid, 
        maxBid, 
        setMaxBid, 
        fetchBid }}
    >
      {children}
    </BidContext.Provider>
  );
};

export { BidContext, BidProvider };
