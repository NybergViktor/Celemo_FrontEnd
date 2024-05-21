import React, { useContext, useEffect }  from "react";
import { ReviewContext } from "../../components/context/ReviewContext";


const UsersReviews = () => {
    const userId = useContext(localStorage.getItem("reviewedUserId", reviewedUserId));

    const { usersReviews, fetchUsersReviews } = useContext(ReviewContext);

    useEffect(() => {
        fetchUsersReviews(userId);
    }, [usersReviews]);


    <>
    <div className="review-container">
        <div className="review-box">
            <h3>Reviews</h3>
            {usersReviews.map((review) => {
                return (
                    <div key={review.id}>
                        <p>{review.review}</p>
                        <p>{review.rating}</p>
                    </div>
                );
            })}
            </div>
        </div>
    </>
}

export default UsersReviews;