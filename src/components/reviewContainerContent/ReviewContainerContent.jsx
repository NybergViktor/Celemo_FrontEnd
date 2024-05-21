import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../context/ReviewContext";
import { useParams } from "react-router-dom";
import './ReviewBody.css'
import {UserContext} from '../context/UserContext'

const ReviewContainerContent = () => {

  const userId = useParams();
  const { usersReviews, fetchUsersReviews  } =
    useContext(ReviewContext);
  
    const { userData, getUserFromId } = useContext(UserContext);

  useEffect(() => {
    getUserFromId(userId.userId);
    fetchUsersReviews(userId.userId);
  }, []);

  function checkIfUserHasReviews() {
    if (usersReviews === null) {
      return <h1>No reviews yet</h1>;
    }else {
      return usersReviews.map((review) => {
        return (
          <div key={review.id}>
            <div className="key"></div>
            <ul>
              <li>
                <div className="review">
                  <div className="gradecontainer">
                    {" "}
                    Grade:<div> {review.grade}</div>
                  </div>

                  <div className="reviewtext">{review.reviewText}</div>

                  <h5>@{review.createdBy.username}</h5>
                </div>
              </li>
            </ul>
          </div>
        );
      })
    }
  }
  return (
    <div className="reviewContainerContent">
      <div className="user">
        <h2>@{userData.username}</h2>
      </div>

      {checkIfUserHasReviews()}
      
    </div>
  );
};

export default ReviewContainerContent;
