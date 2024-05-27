import { Link, useParams } from "react-router-dom";
import { ReviewContext } from "../../components/context/ReviewContext";
import { useState, useContext, useEffect } from "react";
import "../createReviewPage/CreateRStyle.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export const CreateReview = () => {
  const { createReviews, errorMsg, setErrorMsg } = useContext(ReviewContext);
  const [reviewValue, setReviewValue] = useState({
    grade: "",
    reviewText: "",
    reviewedUserId: localStorage.getItem("reviewedUserId"),
    createdById: localStorage.getItem("loggedInUserId"),
  });
  
  const [reviewedUsername] = useState(localStorage.getItem("reviewedUsername"));


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReviewValue({ ...reviewValue, [name]: value });
    console.log(reviewValue);
  };

  const handleSubmit = async (e, reviewValue) => {
    e.preventDefault();
    console.log(reviewValue);
    if (e.error) {
      console.log("error: " + reviewValue.error);
    }
    await createReviews(reviewValue);
    checkErrorMsg();
    console.log(reviewValue);
    window.location.href = "/";
  };

  return (
    <>
      <Header></Header>
      <main className="review-main">
        <div className="review-container">
          <h1 className="username-review">Review: {reviewedUsername}</h1>
          <form className="review-form-container" onSubmit={handleSubmit}>
            <label>
              <select
                name="grade"
                className="grade"
                required
                onChange={handleChange}
              >
                <option value="">Grade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <label>
              <p className="review-p">Review Text:</p>
              <input
                className="review-text"
                type="text"
                name="reviewText"
                value={reviewValue.reviewText}
                onChange={handleChange}
                maxLength="50"
                required
                placeholder="max 50 characters"
              />
            </label>

            <button
              className="place-review-button"
              type="submit"
              onClick={(e) => handleSubmit(e, reviewValue)}
            >
              
              {checkErrorMsg}
            </button>
            <div className="error">{errorMsg}</div>
          </form>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};
