import "../review/ReviewBody.css";

const ReviewBody = () => {
    return (
        <div className="reviewBody">
            <h1>Reviews</h1>
            <div className="user">
                <h2>Placeholder for username</h2>
            </div>
            <div className="reviewContainer">
                {/* remove the placeholder review and replace with a list of reviews 
                This means the li's and then create them through a script
                */}
                <ul>
                    <li>
                        <div className="review">
                            <h4>Grade: 3</h4>
                            <h3>placeholder for review title</h3>
                            <p>placeholder for review text</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="review">
                        <h4>Grade: 3</h4>
                            <h3>placeholder for review title</h3>
                            <p>placeholder for review text</p>
                            
                        </div>
                    </li>
                    <li>
                        <div className="review">
                            
                            <h4>Grade: <div className="gradeContainer"><p>3</p></div></h4>
                            <h3>placeholder for review title</h3>
                            <p>placeholder for review text</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ReviewBody;