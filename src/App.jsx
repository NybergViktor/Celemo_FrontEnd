import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import Login from "./pages/LoginPage/LoginPage"

import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";

import ReviewPage from "./pages/reviewpage/ReviewPage";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="login" element ={<Login/>} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
