
import "./reviewContainerContent.css";
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../context/ReviewContext";


const ReviewContainerContent = () => {
    const { usersReviews, fetchUsersReviews } = useContext(ReviewContext); 
    const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));
    
    useEffect(() => {
        fetchUsersReviews(loggedInUserId);
    }, []);

    
    return(
            <div className="reviewContainerContent">
                {usersReviews.map((review) => {
                    return (
            <><div className="user">
                            <h2>{review.reviewedUser.username}</h2>
                        </div><ul>
                                <li>
                                    <div className="review">
                                        <div className="gradecontainer"> Grade:<div> {review.grade}</div>
                                        </div>
                                        <div className="reviewtext">{review.reviewText}</div>
                                        <h5>{review.createdBy.username}</h5>
                                    </div>
                                </li>
                            </ul></>
                )
            }
                )
                }
            </div>
    );
};

export default ReviewContainerContent;