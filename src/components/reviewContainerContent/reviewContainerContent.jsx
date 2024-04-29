import "./reviewContainerContent.css";

const ReviewContainerContent = () => {
    return(
        <>
            <div className="reviewContainerContent">
            <div className="user">
                <h2>@Username</h2>
            </div>
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
                </ul>              </div>
        </>
    )
}
export default ReviewContainerContent;