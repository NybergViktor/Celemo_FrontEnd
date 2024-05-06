import { createContext, useEffect, useState } from "react";

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {

  // START FetchAllReviews SECTION ==========================

  const [usersReviews, setUsersReviews] = useState([]);

  const fetchUsersReviews = async (userId) => {

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
        `${import.meta.env.VITE_API_URL}/reviews/find/all-user`,
        options
      );
      const data = await res.json();
      console.log(data);
      setUsersReviews(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };

  // END FetchAllReviews SECTION ==========================
  

  return (
    <ReviewContext.Provider value={{
        usersReviews,
        setUsersReviews,
        fetchUsersReviews,
        
    }}>
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
