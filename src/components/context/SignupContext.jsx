import {createContext, useEffect, useState} from "react";

const SignupContext = createContext();

const SignupProvider = ({children}) => {

    const [signup, setSignup] = useState();

    const fetchSignup = async () => {
        var options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(signup),
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
            signup,
            setSignup,
            fetchSignup,
            inputHandler
        }}>
            {children}
        </SignupContext.Provider>
    );
}