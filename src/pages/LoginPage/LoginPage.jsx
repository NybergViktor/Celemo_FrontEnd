import "./LoginPage.css"
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/Header";
import LoginBody from "../../components/loginBody/LoginBody";

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <Header></Header>
              
            <LoginBody></LoginBody>
            <Footer></Footer>
            
        </div>
    );
};

export default LoginPage;