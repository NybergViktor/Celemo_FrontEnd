import "./LoginPage.css"
import Footer from '../../components/footer/Footer';
import LoginHeader from "../../components/loginheader/LoginHeader";
import LoginBody from "../../components/loginBody/LoginBody";

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <LoginHeader></LoginHeader>
                 <img src="src/assets/logo.png" className="logo-a" />
            <LoginBody></LoginBody>
            
            <Footer></Footer>
            
        </div>
    );
};

export default LoginPage;
