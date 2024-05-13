import { createContext, useEffect, useState } from "react";

const BidContext = createContext();

const BidProvider = ({ children }) => {

  //##############################################################
  // Create Bid ##################################################
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

  //##############################################################
  // Get Bids for user ###########################################

  const [ usersBids, setUsersBids ] = useState([]);
  const [ noBids, setNoBids ] = useState("");

  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const getBidsForUser = async (userId) => {
    if (userId !== undefined) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/bids/find/all-user/${userId}`, options);

          if (response.status === 404) {
            setNoBids("No bids");
            console.log(noBids);
          }
          if (response.ok) {
            const data = await response.json();
            setUsersBids(data);
          }
        } catch (error) {
          console.log(error);
        }  
      
    }
  }

  useEffect(() => {
    console.log(noBids);
  }, [noBids])

  return (
    <BidContext.Provider
      value={{
        startBid,
        setStartBid, 
        maxBid, 
        setMaxBid, 
        fetchBid,
        getBidsForUser,
        usersBids,
        noBids
        }}
    >
      {children}
    </BidContext.Provider>
  );
};

export { BidContext, BidProvider };
