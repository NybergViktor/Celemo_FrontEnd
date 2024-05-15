import { createContext, useEffect, useState } from "react";

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
  const [reviewedUserId, setReviewedUserId] = useState("");

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
        createdById: `${createdById}`,
        reviewedUserId: `${reviewedUserId}`,
      }),
    };

    try {
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/reviews/create`,
        options
      );
      const data = await res.json();
      console.log(data);
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
        createReviews
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
