import "./reviewContainerContent.css";

const ReviewContainerContent = (props) => {
    return(
        <>
            <div className="reviewContainerContent">
            <div className="user">
                <h2>@{props.username}</h2>
            </div>
                <ul>                        
                    <li>
                        <div className="review">
                            <div className="gradecontainer"> Grade:<div> {props.grade}</div>
                                    </div>
                                    <div className="reviewtext">{props.reviewtext}</div>
                            <h5>@{props.reviewinguser}</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default ReviewContainerContent;