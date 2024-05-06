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
import { SearchProvider } from "./components/context/SearchContext";
import { BidProvider } from "./components/context/BidsContext";
import CreateAuctionPage from "./pages/create-auction-page/CreateAuctionPage";

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <SearchProvider>
          <AuctionProvider>
            <BidProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Startpage />} />
                  <Route path="/" element={<Startpage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/review" element={<ReviewPage />} />
                  <Route path="/auction" element={<AuctionPage />} />
                </Routes>
              </BrowserRouter>
            </BidProvider>
          </AuctionProvider>
        </SearchProvider>
      </UserProvider>
    </LoginProvider>
  );
}

export default App;
