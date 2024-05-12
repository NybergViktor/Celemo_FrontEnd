import "./LoginBody.css";
import{useState} from "react"
import axios from "axios";

const LoginBody =() =>{

   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const[userId, setuserId] = useState("")



  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!username || !password && password != (data)){
      alert("Fill in Username and password")
      return
    }
  
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,
      {
          username,
          password
      }
  )

     window.localStorage.setItem("user", JSON.stringify(data))
     console.log("user Login " + username  )

  

   }catch(err){

   console.log("Error: +"  + err)
      alert("Lösenordet du har angivit är felaktigt")
   }

  }
  

    return (
      <div className="LoginContainer" >
             <form className="loginForm" onSubmit={handleSubmit} >
                <input type="text" placeholder="Username" className="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>

                <input type="password" placeholder="Password" className="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

                <span value={userId} onChange={(e) => setuserId(e.target.value)}></span>

                <button type="submit" className="button">Sign In</button>

                <a className="fg" href="index.html">Forgot password? </a>

                <a className="ca" href="/signup">Create new account</a>
              </form>  
     </div>
          
    ); 
}

export default LoginBody;