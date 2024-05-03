import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  const [auction, setAuction] = useState([]);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ id: "65f81f6866a5913190fc0dd3" }),
  };

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auction/find-one`,
          options
        );
        setAuction(res.data);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchAuction();
  }, []);

  return (
    <AuctionContext.Provider value={{ auction, setAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };

// "65f81f6866a5913190fc0dd3"
