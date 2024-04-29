import "./LoginBody.css";
const LoginBody =() =>{
    return (
        <div className="loginStyle">
            <div className="LoginContainer">
              <form className="loginForm">
                <input type="text" placeholder="Username"/>
                <input type="password" name="" id=""  placeholder="Password" />
                <button type="">Log in</button>
                <h3>Forgot password?</h3>
                <h3>Create new account</h3>
              </form>  
            </div>
        </div>
    ); 
}

export default LoginBody;