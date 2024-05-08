import "../SignupBody/Body.css"
import {useContext, useEffect, useState} from "react";
import { SignupContext, SignupProvider } from "../context/SignupContext";

const Body = () => {
    const {fetchSignup} = useContext(SignupContext);

    const [signupValue, setSignupValue] = useState({
        firstName:              "",
        lastName:               "",
        username:               "",
        password:               "",
        email:                  "",
        dateOfBirth:            "",
        address_street:         "",
        address_city:           "",
        address_postalCode:     "",
    });

    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setSignupValue({ ...signupValue, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.error) {
            console.log("error: " + e.error);
        }

        fetchSignup(signupValue);
        console.log(JSON.stringify(signupValue));
    }

    return (
        <div className="signUpContainer">
            <h1>Sign up</h1>
            <form className="signUpForm">

              <input
              name="username" 
              value={signupValue.username}
              type="text" 
              id="username" 
              className="inputUsername" 
              placeholder="Username" 
              onChange={handleChange}/>

              <input
              name="password" 
              value={signupValue.password} 
              type="password" 
              id="password" 
              className="inputPassword" 
              placeholder="Password" 
              onChange={handleChange}/>

              <input
              name="firstName" 
              value={signupValue.firstName} 
              type="text" 
              id="fname" 
              className="inputFname" 
              placeholder="First Name" 
              onChange={handleChange}/>

              <input
              name="lastName" 
              value={signupValue.lastName} 
              type="text" 
              id="lname" 
              className="inputLname" 
              placeholder="Last Name" 
              onChange={handleChange}/>

              <input
              name="email" 
              value={signupValue.email} 
              type="email" 
              id="email" 
              className="inputEmail" 
              placeholder="Email" 
              onChange={handleChange}/>

              <input
              name="dateOfBirth" 
              value={signupValue.dateOfBirth} 
              type="date" 
              id="dob" 
              className="inputDOB" 
              placeholder="Date of Birth" 
              onChange={handleChange}/>

              <input
              name="address_street" 
              value={signupValue.address_street} 
              type="text" 
              id="address" 
              className="inputAddress" 
              placeholder="Address Street" 
              onChange={handleChange}/>

              <input
              name="address_city" 
              value={signupValue.address_city} 
              type="text" 
              id="city" 
              className="inputCity" 
              placeholder="City" 
              onChange={handleChange}/>

              <input
              name="address_postalCode" 
              value={signupValue.address_postalCode} 
              type="number" 
              id="postal" 
              className="inputPostal" 
              placeholder="Postal Code" 
              onChange={handleChange}/>

              <button id="signUpButton" 
              onSubmit={() => handleSubmit(signupValue)}
              className="signUpButton">Sign up
              </button>
            </form>
        </div>
    )
}

export default Body;