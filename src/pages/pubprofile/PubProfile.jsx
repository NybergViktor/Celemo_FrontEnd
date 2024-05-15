import PubProfileComp from "../../components/pubprofilecomp/PubProfileComp";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCallback } from "react";

const PubProfile = () => {
    return (
        <>
        <Header/>
        <PubProfileComp useCallback ={savedUser}/>
        <Footer/>
        </>
    );
}

export default PubProfile;