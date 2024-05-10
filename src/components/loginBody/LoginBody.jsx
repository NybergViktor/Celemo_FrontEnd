import "./LoginBody.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const LoginBody =() =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const{
      state : {user},
      dispatch,
    }=useContext(AuthContext)


    const handleSubmit = async (e) => {
      e.preventDefault()

      if(!username || !password){
          alert("fill in username and password")
          return
      }

      try{
          const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,
              {
                  username,
                  password
              }
          )
          dispatch({
              type:"LOGIN",
              payload: data
          })

          window.localStorage.setItem("user", JSON.stringify(data))
          console.log("user Login ")

          return navigator("/")


        }catch(err){

          console.log("Error: +"  + err)
        }

  }





    return (
      <div className="LoginContainer" onSubmit={handleSubmit}>
             <form className="loginForm">
                <input type="text" placeholder="Username" className="username"
                value={username} onChange={(e) => setUsername(e.target.value)}/>

                <input type="password" placeholder="Password" className="password"
                value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit" className="button">Sign In</button>

                <a className="fg" href="index.html">Forgot password? </a>

                <a className="ca" href="/signup">Create new account</a>
              </form>  
     </div>
          
    ); 
}

export default LoginBody;