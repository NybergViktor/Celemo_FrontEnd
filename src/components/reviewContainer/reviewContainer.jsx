import "./reviewContainer.css"
import ReviewContainerContent from "../reviewContainerContent/reviewContainerContent";
const ReviewContainer = () => {
    return (
        <>
                <ReviewContainerContent 
                username="Username"
                grade="3"
                reviewtext="Reviewtext"
                reviewinguser="ReviewingUser"/>
        </>
    )
}
export default ReviewContainer;