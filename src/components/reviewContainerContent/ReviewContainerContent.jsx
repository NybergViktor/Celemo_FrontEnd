import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../context/ReviewContext";
import './ReviewBody.css'

const ReviewContainerContent = () => {
  const { usersReviews, fetchUsersReviews, reviewedUser } =
    useContext(ReviewContext);

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    fetchUsersReviews(loggedInUserId);
  }, []);

  return (
    <div className="reviewContainerContent">
      <div className="user">
        <h2>@{reviewedUser.username}</h2>
      </div>

      {usersReviews.length === 0 && <h1>No reviews yet</h1>}
      {usersReviews.map((review) => {
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
      })}
    </div>
  );
};

export default ReviewContainerContent;
