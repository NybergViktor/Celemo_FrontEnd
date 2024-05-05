import { createContext, useEffect, useState } from "react";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  const [auction, setAuction] = useState([]);
  const [seller, setSeller] = useState([]);

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      auctionId: "6636962a4e494335e4e911c3",
    }),
  };

  const fetchAuction = async () => {
    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/auction/find-one`,
        options
      );
      const data = await res.json();
      console.log(data);
      setAuction(data);
      setSeller(data.seller);
    } catch (err) {
      console.log("err: " + err);
    }
  };

  return (
    <AuctionContext.Provider
      value={{ auction, setAuction, fetchAuction, seller, setSeller }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
