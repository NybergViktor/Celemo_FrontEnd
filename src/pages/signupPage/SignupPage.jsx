import "./SignupPage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import Body from "../../components/SignupBody/Body";

const SignupPage = () => {
    return (
        <div className="signuppage">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default SignupPage;