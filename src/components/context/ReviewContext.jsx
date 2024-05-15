import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  // START FetchAllReviews SECTION ==========================

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
      setReviewedUser(data[0].reviewedUser);
      setUsersReviews(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // END FetchAllReviews SECTION ==========================

  // START createReviews SECTION ==========================

  const [grade, setGrade] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [createdById, setCreatedById] = useState("");
  const [reviewedUserId, setReviewedUserId] = useState(
    localStorage.getItem("reviewedUserId")
  );

  //const { userData, getUserFromId} = useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  // useEffect(() => {
  //   getUserFromId(loggedInUserId);
  // }, []);

  const createReviews = async () => {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        grade: `${grade}`,
        reviewText: `${reviewText}`,
        createdById: `${loggedInUserId}`,
        reviewedUserId: `${reviewedUserId}`,
      }),
    };

    try {
      console.log(
        "grade: " +
          grade +
          " reviewText: " +
          reviewText +
          " loggedInUserId: " +
          loggedInUserId +
          " reviewedUserId: " +
          reviewedUserId
      );
      // let res = await fetch(
      //   `${import.meta.env.VITE_API_URL}/reviews/create`,
      //   options
      // );
      // const data = await res.json();
      // console.log(data);
    } catch (err) {
      console.log("err: " + err);
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
        setReviewedUser,
        grade,
        setGrade,
        reviewText,
        setReviewText,
        createdById,
        setCreatedById,
        reviewedUserId,
        setReviewedUserId,
        createReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
