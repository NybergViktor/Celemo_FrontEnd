import { createContext, useEffect, useState } from "react";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  const [auction, setAuction] = useState([]);
  

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      auctionId: "65f81f6866a5913190fc0dd3",
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
    } catch (err) {
      console.log("err: " + err);
    }
  };

 

  return (
    <AuctionContext.Provider value={{ auction, setAuction, fetchAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
