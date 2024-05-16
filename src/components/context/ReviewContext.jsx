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

  const [grade, setGrade] = useState();
  const [reviewText, setReviewText] = useState("");
  const [createdById, setCreatedById] = useState();
  const [reviewedId, setReviewedId] = useState();

  const [reviewedUserId, setReviewedUserId] = useState(
    localStorage.getItem("reviewedUserId")
  );

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    setCreatedById(loggedInUserId);
    setReviewedId(reviewedUserId);
  }, []);

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
        reviewedUserId: `${reviewedId}`,
      }),
    };

    try {
      console.log(options);

      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/reviews/create`,
        options
      );
      const data = await res.json();
      console.log(data);
      setGrade();
      setReviewText("");
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
        createReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
