import "./Startpage.css";
import Footer from '../../components/footer/Footer';
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";

const Startpage = () => {
    return (
        <div className="startpage">
            <Header></Header>
            <SubHeader></SubHeader>
            <Footer></Footer>
        </div>
    );
}

export default Startpage;


