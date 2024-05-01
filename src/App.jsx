import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";
import ReviewPage from "./pages/reviewpage/ReviewPage";
import AuctionPage from "./pages/auction-page/AuctionPage";

function App() {
  
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/auction" element={<AuctionPage />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
