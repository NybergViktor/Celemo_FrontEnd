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
        adress_street:         "",
        adress_city:           "",
        adress_postalCode:     "",
        gender:                 "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignupValue({ ...signupValue, [name]: value});
    }

    const handleSubmit = (e, signupValue) => {
        e.preventDefault();
        if (signupValue.error) {
            console.log("error: " + signupValue.error);
        }
        fetchSignup(signupValue);
        console.log(signupValue);
        
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

            <select name="gender" placeholder="Gender" onChange={handleChange}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>        //TODO: Make this look better
            </select> 

              <input
              name="dateOfBirth" 
              value={signupValue.dateOfBirth} 
              type="date" 
              id="dob" 
              className="inputDOB" 
              placeholder="Date of Birth" 
              onChange={handleChange}/>

              <input
              name="adress_street" 
              value={signupValue.adress_street} 
              type="text" 
              id="adress" 
              className="inputAdress" 
              placeholder="Adress Street" 
              onChange={handleChange}/>

              <input
              name="adress_city" 
              value={signupValue.adress_city} 
              type="text" 
              id="city" 
              className="inputCity" 
              placeholder="City" 
              onChange={handleChange}/>

              <input
              name="adress_postalCode" 
              value={signupValue.adress_postalCode} 
              type="number" 
              id="postal" 
              className="inputPostal" 
              placeholder="Postal Code" 
              onChange={handleChange}/>

              <button id="signUpButton" 
              onClick={(e) => handleSubmit(e, signupValue)}
              className="signUpButton">Sign up
              </button>
            </form>
        </div>
    )
}

export default Body;