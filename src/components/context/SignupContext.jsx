import {createContext, useEffect, useState} from "react";
import axios from "axios";

const SignupContext = createContext();

const SignupProvider = ({children}) => {
   

    // START FetchSignup SECTION ==========================
    const [signupValue, setSignupValue] = useState([]);

    const fetchSignup = async (signupValue) => {
        
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, signupValue)
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <SignupContext.Provider value={{
            fetchSignup,
            signupValue,
            setSignupValue
        }}>
            {children}
        </SignupContext.Provider>
    );
}

export {SignupContext, SignupProvider};