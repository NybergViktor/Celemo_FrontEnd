import "../review/ReviewBody.css";

const ReviewBody = () => {
    return (
        <div className="reviewBody">

            <div className="user">
                <h2>@Username</h2>
            </div>
            <div className="reviewContainer">
                {/* remove the placeholder review and replace with a list of reviews 
                This means the li's and then create them through a script
                */}
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
        </div>
    );
};

export default ReviewBody;