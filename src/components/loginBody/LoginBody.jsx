import "./LoginBody.css";
const LoginBody =() =>{
    return (
      <div className="LoginContainer">
             <form className="loginForm">
                <input type="text" placeholder="Username" className="username"/>
                <input type="password" name="" id=""  placeholder="Password" className="password"/>
                <button type="" className="button">Log in</button>
                <h3 className="fg">Forgot password?</h3>
                <h3 className="ca">Create new account</h3>
              </form>  
     </div>
          
    ); 
}

export default LoginBody;