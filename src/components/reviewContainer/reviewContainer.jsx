import "./reviewContainer.css"
import ReviewContainerContent from "../reviewContainerContent/reviewContainerContent";
const ReviewContainer = () => {
    return (
        <>
                {/* This is the things that are meant to get put into 
                the containercontent and we'll create as many as needed*/}
                <ReviewContainerContent 
                username="Username"
                grade={3}
                reviewtext="Reviewtext"
                reviewinguser="ReviewingUser"/>
        </>
    )
}
export default ReviewContainer;