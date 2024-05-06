import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import { LoginProvider } from "./components/context/LoginContext";
import { UserProvider } from "./components/context/UserContext";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import AuctionPage from "./pages/auction-page/AuctionPage";
import { AuctionProvider } from "./components/context/AuctionContext";
import { BidProvider } from "./components/context/BidsContext";
import CreateAuctionPage from './pages/create-auction-page/CreateAuctionPage'
<<<<<<< HEAD
import { ReviewProvider } from "./components/context/ReviewContext";
=======
>>>>>>> fc5bd7e51ae2b79ca13ffd99b474337a18d13811

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <AuctionProvider>
<<<<<<< HEAD
          <ReviewProvider>
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
          </ReviewProvider>
=======
          <BidProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Startpage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/auction" element={<AuctionPage />} />
              </Routes>
            </BrowserRouter>
          </BidProvider>
>>>>>>> fc5bd7e51ae2b79ca13ffd99b474337a18d13811
        </AuctionProvider>
      </UserProvider>
    </LoginProvider>
  );

}

export default App;
