import React, { useContext } from "react";
import { ReviewContext } from "../../components/context/ReviewContext";
import { useState } from "react";

export const CreateReview = () => {
  const {
    setGrade,
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
    <main className="review-main">
      <div className="review-container">
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor=""></label>
            <input type="" />
            <label htmlFor=""></label>
            <input type="text" />
            <button type="submit"></button>
        </form>
      </div>
    </main>
  );
};
