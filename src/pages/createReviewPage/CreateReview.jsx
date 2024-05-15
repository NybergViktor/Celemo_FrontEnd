import React, { useContext } from "react";
import { ReviewContext } from "../../components/context/ReviewContext";
import { useState } from "react";
import "../createReviewPage/CreateRStyle.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export const CreateReview = () => {
  const {
    grade,
    setGrade,
    reviewText,
    setReviewText,
    setCreatedById,
    setReviewedUserId,
    createReviews,
  } = useContext(ReviewContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.error) {
      console.log("error: " + e.error);
    }

    createReviews();

    setGrade(""), setReviewText(""), setCreatedById(""), setReviewedUserId("");
  };

  return (
    <>
      <Header></Header>
      <main className="review-main">
        <div className="review-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <label >
              <input className="grade" type="" value={grade} placeholder="Grade"/>
            </label>
            <label >
              <input type="text" value={reviewText} placeholder="Review Text:"/>
            </label>
            <button type="submit">Place Review</button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
