import { useParams } from "react-router-dom";
import { ReviewContext } from "../../components/context/ReviewContext";
import { useState, useContext, useEffect } from "react";
import "../createReviewPage/CreateRStyle.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { UserContext } from "../../components/context/UserContext";
import { SearchContext } from "../../components/context/SearchContext";

export const CreateReview = () => {
  const {
    grade,
    setGrade,
    reviewText,
    setReviewText,
    createdById,
    createReviews,
  } = useContext(ReviewContext);

  const [reviewedUserId, setReviewedUserId] = useState(
    localStorage.getItem("reviewedUserId")
  );
  const [reviewedUsername, setReviewedUsername] = useState(
    localStorage.getItem("reviewedUsername")
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.error) {
      console.log("error: " + e.error);
    }

    createReviews();

    setGrade(""), setReviewText("");
  };

  return (
    <>
      <Header></Header>
      <main className="review-main">
        <div className="review-container" key={reviewedUserId}>
          <h1 className="username-review">Review: {reviewedUsername}</h1>
          <form className="review-form-container" onSubmit={handleSubmit}>
            <label>
              <select
                name="grade"
                className="grade"
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value="">Grade</option>
                <option value="ONE">1</option>
                <option value="TWO">2</option>
                <option value="THREE">3</option>
                <option value="FOUR">4</option>
                <option value="FIVE">5</option>
              </select>
            </label>
            <label>
              <p className="review-p">Review Text:</p>
              <input
                className="review-text"
                type="text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </label>
            <button className="place-review-button" type="submit">
              Place Review
            </button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
