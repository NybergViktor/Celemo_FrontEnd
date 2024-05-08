import {createContext, useEffect, useState} from "react";

const SignupContext = createContext();

const SignupProvider = ({children}) => {
    const [signupValue, setSignupValue] = useState();

    // START FetchSignup SECTION ==========================
    
    const fetchSignup = async (signupValue) => {
        var options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({signupValue}),
        };

        try {
            let res = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/signup`,
                options
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log("err: " + err);
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