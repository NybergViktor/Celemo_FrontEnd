import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  // START FetchAllReviewsForUser SECTION ==========================

  const [usersReviews, setUsersReviews] = useState([]);
  const [reviewedUser, setReviewedUser] = useState([]);

  

  const fetchUsersReviews = async (userId) => {
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
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/reviews/find/all-user/${userId}`,
        options
      );
      const data = await res.json();
      console.log(data);
      setUsersReviews(data);
    } catch (err) {
      console.log("err: " + err);
      setUsersReviews(null);
    }
  };

  // END FetchAllReviewsForUser SECTION ==========================

  // START FetchALLReviews SECTION ==========================

  
    // START FetchAllReviews SECTION ==========================
  
    const [allReviews, setallReviews] = useState([]);
  
    const fetchallReviews = async () => {
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      };
  
      try {
        let res = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews/find/all`,
          options
        );
        const datares = await res.json();
        console.log(datares);

        setallReviews(datares);
      } catch (err) {
        console.log("err: " + err);
      }
    };

  // END FetchALLReviews SECTION ==========================

  // START createReviews SECTION ==========================

  const [reviewValue, setReviewValue] = useState([]);
  const [error, setError] = useState([]);

  
    //var options = {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  credentials: "include",
    //  body: JSON.stringify({
    //    reviewValue,
    //  }),
    //};
  const createReviews = async (reviewValue) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reviews/create`, reviewValue, {withCredentials: true})
      console.log(reviewValue);
    } catch (error) {
      console.log("err: " + error);
      setError(error);
      console.log(error.response.data.message);
    }
  };

  // END createReviews SECTION ==========================

  return (
    <ReviewContext.Provider
      value={{
        usersReviews,
        setUsersReviews,
        fetchUsersReviews,
        reviewedUser,
        createReviews,
        allReviews,
        fetchallReviews,
        reviewValue,
        setReviewValue
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
export { ReviewContext, ReviewProvider };
