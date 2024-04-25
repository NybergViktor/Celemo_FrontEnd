import "./SignupPage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import Body from "../../components/SignupBody/Body";

const Startpage = () => {
    return (
        <div className="startpage">
            <Header></Header>
            <SubHeader></SubHeader>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Startpage;