import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import Login from "./pages/LoginPage/LoginPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="login" element ={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
