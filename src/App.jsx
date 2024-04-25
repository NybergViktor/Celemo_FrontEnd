import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
