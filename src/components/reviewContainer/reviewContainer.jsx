import "./reviewContainer.css"
import ReviewContainerContent from "../reviewContainerContent/reviewContainerContent";
const ReviewContainer = () => {
    return (
        <>
            <div className="reviewBody">
                <ReviewContainerContent 
                username="Username"
                grade="3"
                reviewtext="Reviewtext"
                reviewinguser="ReviewingUser"/>
            </div>
        </>
    )
}
export default ReviewContainer;