import "./ReviewPage.css";
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/Header";
import ReviewContainerContent from "../../components/reviewContainerContent/ReviewContainerContent";

const ReviewPage = () => {
    return (
        <>
        <div className="reviewpage">
            <Header></Header>
            <ReviewContainerContent></ReviewContainerContent>
            <Footer></Footer>
        </div>
        </>
    );
}

export default ReviewPage;