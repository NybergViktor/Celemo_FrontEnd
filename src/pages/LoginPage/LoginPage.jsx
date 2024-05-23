import "./LoginPage.css"
import Footer from '../../components/footer/Footer';
import LoginHeader from "../../components/loginheader/LoginHeader";
import LoginBody from "../../components/loginBody/LoginBody";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <LoginHeader></LoginHeader>
            <Link to={"/"} className="home-link">
                 <img src="src/assets/logo.png" className="logo-a" /></Link>
            <LoginBody></LoginBody>
            
            <Footer></Footer>
            
        </div>
    );
};

export default LoginPage;
