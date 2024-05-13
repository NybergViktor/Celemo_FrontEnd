import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./context/LoginContext";
import { UserProvider } from "./context/UserContext";
import AuctionPage from "./pages/auction-page/AuctionPage";
import { AuctionProvider } from "./context/AuctionContext";
import { EnumProvider } from "./context/EnumContext";
import { SearchProvider } from "./context/SearchContext";
import { BidProvider } from "./context/BidsContext";
import CreateAuctionPage from "./pages/create-auction-page/CreateAuctionPage";
import { ReviewProvider } from "./context/ReviewContext";
import { SignupProvider } from "./context/SignupContext";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <SignupProvider>
      <LoginProvider>
        <UserProvider>
          <SearchProvider>
            <EnumProvider>
              <AuctionProvider>
                <BidProvider>
                  <ReviewProvider>
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<Startpage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/review" element={<ReviewPage />} />
                        <Route
                          path="/auction/find-one/:auctionId"
                          element={<AuctionPage />}
                        />
                        <Route
                          path="/create-auction"
                          element={<CreateAuctionPage />}
                        />
                      </Routes>
                    </BrowserRouter>
                  </ReviewProvider>
                </BidProvider>
              </AuctionProvider>
            </EnumProvider>
          </SearchProvider>
        </UserProvider>
      </LoginProvider>
    </SignupProvider>
  );
}

export default App;
