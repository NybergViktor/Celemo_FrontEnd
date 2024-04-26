import "../review/ReviewBody.css";
import reviewContainer from "../../components/reviewContainer/reviewContainer";
import ReviewContainerContent from "../../components/reviewContainerContent/reviewContainerContent";

const ReviewBody = () => {
    return (
        <div className="reviewBody">
            <div className="user">
                <h2>@Username</h2>
            </div>
            
                {/* remove the placeholder review and replace with a list of reviews 
                This means the li's and then create them through a script
                */}
                <reviewContainer>
                <ReviewContainerContent></ReviewContainerContent>
                </reviewContainer>
                <ul>                        
                    <li>
                        <div className="review">
                            <div className="gradecontainer"> Grade:<div> 3</div>
                                    </div>
                                    <div className="reviewtext">placeholder for review text</div>
                            <h5>@createdBy</h5>
                        </div>
                    </li>
                    <li>
                        <div className="review">
                            <div className="gradecontainer"> Grade:<div> 3</div>
                                    </div>
                                    <div className="reviewtext">placeholder for review text</div>
                            <h5>@createdBy</h5>
                        </div>
                    </li>
                </ul>
                
            </div>
    
    );
};

export default ReviewBody;