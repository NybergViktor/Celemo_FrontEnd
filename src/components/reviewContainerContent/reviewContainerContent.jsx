import { propTypes } from "react-bootstrap/esm/Image";
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

{/* This here makes it so we can debug easier by the console telling us if something isn't the same
    data type as what's depicted in the propTypes */}

ReviewContainerContent.propTypes = {
    username: propTypes.string,
    grade: propTypes.number,
    reviewtext: propTypes.string,
    reviewinguser: propTypes.string
}
export default ReviewContainerContent;