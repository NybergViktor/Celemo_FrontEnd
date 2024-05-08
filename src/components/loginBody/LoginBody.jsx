import "./LoginBody.css";
const LoginBody =() =>{

    return (
      <div className="LoginContainer">
             <form className="loginForm">
                <input type="text" placeholder="Username" className="username"/>
                <input type="password" name="" id=""  placeholder="Password" className="password"/>
                <button type="" className="button">Sign In</button>
                <a className="fg" href="index.html">Forgot password? </a>
                <a className="ca" href="/signup">Create new account</a>
              </form>  
     </div>
          
    ); 
}

export default LoginBody;