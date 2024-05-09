import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";
import { UserProvider } from "./components/context/UserContext";
import ReviewPage from "./pages/reviewpage/ReviewPage";
import AuctionPage from "./pages/auction-page/AuctionPage";
import { AuctionProvider } from "./components/context/AuctionContext";
import CreateAuctionPage from "./pages/create-auction-page/CreateAuctionPage";
import { EnumProvider } from "./components/context/EnumContext"

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <AuctionProvider>
          <EnumProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Startpage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/auction" element={<AuctionPage />} />
                <Route path="/create-auction" element={<CreateAuctionPage />} />
              </Routes>
            </BrowserRouter>
          </EnumProvider>
        </AuctionProvider>
      </UserProvider>
    </LoginProvider>
  );
}

export default App;
