import "./LoginBody.css";
const LoginBody =() =>{

    return (
      <div className="LoginContainer">
             <form className="loginForm">
                <input type="text" placeholder="Username" className="username"/>
                <input type="password" name="" id=""  placeholder="Password" className="password"/>
                <button type="" className="button">Log in</button>
                <a className="fg" href="index.html">Forgot password? </a>
                <a className="ca" href="index.html">Create new account</a>
              </form>  
     </div>
          
    ); 
}

export default LoginBody;