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
                            
                            <h4>Grade:<p>3</p></h4>
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