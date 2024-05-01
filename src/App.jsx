import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";
import { UserProvider } from "./components/context/UserContext";

import ReviewPage from "./pages/reviewpage/ReviewPage";

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Startpage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </LoginProvider>
  );
}

export default App;
