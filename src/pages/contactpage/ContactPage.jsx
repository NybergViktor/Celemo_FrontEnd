import { EmojiAngryFill } from "react-bootstrap-icons";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <>
        <Header/>
      <div className="contact-page">
        <div className="contact-page-box">
        <div className="contact-page-title">
        <h1>Contact Us</h1>
        </div>
        <div className="contact-page-content">
        <p>
          If you want to reach us you can do so through our email <br/><br/>
          
          <div className="email">
            contact@celemo.com
            </div>
          </p>
          </div>
          </div>
          </div>
          <Footer/>
          </>
    )}
    export default ContactPage;