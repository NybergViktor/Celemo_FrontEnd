import "./ReviewPage.css";
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/Header";
import ReviewBody from "../../components/review/ReviewBody";

const ReviewPage = () => {
    return (
        <div className="reviewpage">
            <Header></Header>
            <ReviewBody></ReviewBody>
            <Footer></Footer>
        </div>
    );
}

export default ReviewPage;