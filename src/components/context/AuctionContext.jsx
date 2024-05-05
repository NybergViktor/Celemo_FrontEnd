import { createContext, useEffect, useState } from "react";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  
  // ===============================================
  // FetchAuction SECTION ==========================
  const [auction, setAuction] = useState([]);
  
  const fetchAuction = async () => {

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
  // END FetchAuction SECTION ==========================

  // ===================================================
  // FetchUsersAuctions SECTION ========================
 
  const [usersAuctions, setUsersAuctions] = useState([]);

  const fetchUsersAuctions = async (userId) => {

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: `${userId}`,
      }),
    };

    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/auction/find/all/user`,
        options
      );
      const data = await res.json();
      console.log(data);
      setUsersAuctions(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // END FetchUsersAuctions SECTION ====================

  // ===================================================
  // FetchAllAuctions SECTION ==========================

  const [allAuctions, setAllAuctions] = useState([]);

  const fetchAllAuctions = async (userId) => {

    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/auction/find/all`);
      const data = await res.json();
      // console.log(data);
      setAllAuctions(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };
  // END FetchAllAuctions SECTION ======================

  return (
    <AuctionContext.Provider value={
      { auction, 
      setAuction, 
      fetchAuction, 
      usersAuctions, 
      fetchUsersAuctions,
      allAuctions,
      fetchAllAuctions 
      }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
