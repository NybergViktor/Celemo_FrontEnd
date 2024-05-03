import "../SignupBody/Body.css"

const Body = () => {
    return (
        <div className="signUpContainer">
            <h1>Sign up</h1>
            <form className="signUpForm">
                <input type="text" className="inputUsername" placeholder="Username" />
                <input type="password" className="inputPassword" placeholder="Password" />
                <input type="text" className="inputFname" placeholder="First Name" />
                <input type="text" className="inputLname" placeholder="Last Name" />
                <input type="email" className="inputEmail" placeholder="Email" />
                <input type="date" className="inputDOB" placeholder="Date of Birth" />
                <input type="text" className="inputAddress" placeholder="Address Street" />
                <input type="text" className="inputCity" placeholder="City" />
                <input type="number" className="inputPostal" placeholder="Postal Code" />
                <button className="signUpButton">Sign up</button>
            </form>
        </div>
    )
}

export default Body;