import "./Startpage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import StartpageMainContainer from "../../components/startpageMainContainer/StartpageMainContainer";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";
import { useContext } from "react";


const Startpage = () => {
    const { setUserId, getUserFromId } = useContext(UserContext);
    const userId = localStorage.getItem("loggedInUserId");


    return (
        <div className="startpage">
            <Header></Header>
            <SubHeader></SubHeader>
            <StartpageMainContainer></StartpageMainContainer>
            <Footer></Footer>
        </div>
    );
}

export default Startpage;


