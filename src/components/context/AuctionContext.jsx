import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  // ===============================================
  // FetchAuction SECTION ==========================
  const [auction, setAuction] = useState({});
  const [seller, setSeller] = useState([]);

  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    // body: JSON.stringify({
    //   auctionId: "6636962a4e494335e4e911c3",
    // }),
  };

  const fetchAuction = async (auctionId) => {
    if (auctionId !== undefined) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/auction/find-one/${auctionId}`,
          options
        );
        const data = await res.json();
        setAuction(data);
        setSeller(data.seller);
        // console.log(data);
      } catch (err) {
        console.log("err: " + err);
      }
    }
  };

  // END FetchAuction SECTION ==========================

  // ===================================================
  // FetchUsersAuctions SECTION ========================

  const [usersAuctions, setUsersAuctions] = useState([]);

  const fetchUsersAuctions = async (userId) => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify({
      //   userId: `${userId}`,
      // }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/auction/find/all/user/${userId}`,
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
  const [totalItems, setTotalItems] = useState(0);

  const fetchAllAuctions = async () => {
    try {
      let res = await fetch(`${import.meta.env.VITE_API_URL}/auction/find/all`);
      const data = await res.json();
      // console.log(data);
      setAllAuctions(data);
      setTotalItems(data.length);
    } catch (err) {
      console.log("err: " + err);
    }
  };
  // END FetchAllAuctions SECTION ======================

  // useEffect(() => {
  //   setSeller(auction.seller);
  // }, [])

  return (
    <AuctionContext.Provider
      value={{
        auction,
        setAuction,
        fetchAuction,
        usersAuctions,
        fetchUsersAuctions,
        allAuctions,
        fetchAllAuctions,
        totalItems,
        seller,
        setSeller,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
