import "../SignupBody/Body.css"
import {useContext, useEffect, useState} from "react";
import {SignupContext} from "../context/SignupContext";

const Body = () => {

    const [signup, setInputValue] = useState({
        firstName:           "",
        lastName:            "",
        username:            "",
        password:            "",
        email:              "",
        dateOfBirth:             "",
        address_street:          "",
        address_city:            "",
        address_postalCode:          "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputValue({ ...signup, [name]: value});
    }

    return (
        <div className="signUpContainer">
            <h1>Sign up</h1>
            <form className="signUpForm">

              <input
              name="username" 
              value={signup.username}
              type="text" 
              id="username" 
              className="inputUsername" 
              placeholder="Username" 
              onChange={handleChange}/>

              <input
              name="password" 
              value={signup.password} 
              type="password" 
              id="password" 
              className="inputPassword" 
              placeholder="Password" 
              onChange={handleChange}/>

              <input
              name="firstName" 
              value={signup.firstName} 
              type="text" 
              id="fname" 
              className="inputFname" 
              placeholder="First Name" 
              onChange={handleChange}/>

              <input
              name="lastName" 
              value={signup.lastName} 
              type="text" 
              id="lname" 
              className="inputLname" 
              placeholder="Last Name" 
              onChange={handleChange}/>

              <input
              name="email" 
              value={signup.email} 
              type="email" 
              id="email" 
              className="inputEmail" 
              placeholder="Email" 
              onChange={handleChange}/>

              <input
              name="dateOfBirth" 
              value={signup.dateOfBirth} 
              type="date" 
              id="dob" 
              className="inputDOB" 
              placeholder="Date of Birth" 
              onChange={handleChange}/>

              <input
              name="address_street" 
              value={signup.address_street} 
              type="text" 
              id="address" 
              className="inputAddress" 
              placeholder="Address Street" 
              onChange={handleChange}/>

              <input
              name="address_city" 
              value={signup.address_city} 
              type="text" 
              id="city" 
              className="inputCity" 
              placeholder="City" 
              onChange={handleChange}/>

              <input
              name="address_postalCode" 
              value={signup.address_postalCode} 
              type="number" 
              id="postal" 
              className="inputPostal" 
              placeholder="Postal Code" 
              onChange={handleChange}/>

              <button id="signUpButton" 
              className="signUpButton">Sign up
              </button>
            </form>
        </div>
    )
}

export default Body;