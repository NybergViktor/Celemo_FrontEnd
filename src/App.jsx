import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";
import { UserProvider } from "./components/context/UserContext";
import AuctionPage from "./pages/auction-page/AuctionPage";
import { AuctionProvider } from "./components/context/AuctionContext";
import { EnumProvider } from "./components/context/EnumContext";
import { SearchProvider } from "./components/context/SearchContext";
import { BidProvider } from "./components/context/BidsContext";
import CreateAuctionPage from "./pages/create-auction-page/CreateAuctionPage";
import { ReviewProvider } from "./components/context/ReviewContext";
import { SignupProvider } from "./components/context/SignupContext";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PubProfile from "./pages/pubprofile/PubProfile";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
  <AuthProvider>
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
                        <Route path="/auction/find-one/:auctionId" element={<AuctionPage />} />
                        <Route
                          path="/create-auction"
                          element={<CreateAuctionPage />}
                        />
                        <Route path="/pubprofile/:userId" element={<PubProfile />} />
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
  </AuthProvider>
  );
};

export default App;
