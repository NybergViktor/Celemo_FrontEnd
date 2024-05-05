import "./Startpage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import StartpageMainContainer from "../../components/startpageMainContainer/StartpageMainContainer";


const Startpage = () => {
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


