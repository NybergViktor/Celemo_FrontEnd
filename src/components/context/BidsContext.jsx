import {
  createContext,
  useContext,
  useEffect,
  useState,
  useParams,
} from "react";
import { SearchContext } from "./SearchContext";
import { UserContext } from "./UserContext";

const BidContext = createContext();

const BidProvider = ({ children }) => {
  const { auctionId } = useContext(SearchContext);
  const { userData, getUserFromId, getUserWinningBidFromId } =
    useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    getUserFromId(loggedInUserId);
  }, []);

  //##############################################################
  // Create Bid ##################################################
  const [startBid, setStartBid] = useState("");
  const [maxBid, setMaxBid] = useState("");

  var optionsPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      startBid: `${startBid}`,
      maxBid: `${maxBid}`,
      userId: `${loggedInUserId}`,
      auctionId: `${auctionId}`,
    }),
  };

  const fetchBid = async () => {
    try {
      console.log(JSON.stringify(optionsPost) + " options");
      console.log(optionsPost.body);

      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/bids/create`,
        optionsPost
      );

      const data = await res.json();
      console.log(JSON.stringify(data + " data"));
    } catch (err) {
      console.log("err: " + err);
    }
  };

  //##############################################################
  // Get Bids for user ###########################################

  const [usersBids, setUsersBids] = useState([]);
  const [noBids, setNoBids] = useState("");

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
          `${import.meta.env.VITE_API_URL}/bids/find/all-user/${userId}`,
          options
        );

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
  };

  useEffect(() => {
    console.log(noBids);
  }, [noBids]);

  //##############################################################
  // Get Bids amount for  auction ###########################################

  const [bidsAmount, setAmountBids] = useState([]);

  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const fetchBidsAmount = async (auctionId) => {
    if (auctionId !== undefined) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/bids/find/bidsamount/${auctionId}`,
          options
        );

        if (response.ok) {
          const data = await response.json();
          setAmountBids(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(bidsAmount);
  }, [bidsAmount]);

  //##############################################################
  // Get bid from bidId ###########################################

  const [currentWinner, setCurrentWinner] = useState("");

  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const fetchOneBid = async (bidId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/bids/find-one/${bidId}`,
        options
      );

      const data = await res.json();
      console.log(data);
      setCurrentWinner(data.user);
      console.log(data.user + "datauser");
      getUserWinningBidFromId(currentWinner);
    } catch (error) {
      console.log(error);
    }
  };

  //##############################################################
  //  ###########################################

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
        noBids,
        fetchBidsAmount,
        bidsAmount,
        fetchOneBid,
        currentWinner,
      }}
    >
      {children}
    </BidContext.Provider>
  );
};

export { BidContext, BidProvider };
