import "./Startpage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import StartpageMainContainer from "../../components/startpageMainContainer/StartpageMainContainer";
import { Link } from "react-router-dom";



const Startpage = () => {
    return (
        <div className="startpage">
            <Header></Header>
            <SubHeader></SubHeader>
            <Link to="/pubprofile/:userId" className="pubProfileLink">Pub Profile</Link>
            <StartpageMainContainer></StartpageMainContainer>
            <Footer></Footer>
        </div>
    );
}

export default Startpage;


