import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Startpage from "./pages/startpage/Startpage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SignupPage from "./pages/signupPage/SignupPage";
import AuctionPage from "./pages/auction-page/AuctionPage";
import CreateAuctionPage from "./pages/create-auction-page/CreateAuctionPage";
import ReviewPage from "./pages/reviewPage/ReviewPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PubProfile from "./pages/pubprofile/PubProfile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ContactPage from "./pages/contactpage/ContactPage";
import AdminPage from "./pages/adminpage/AdminPage";

// PROVIDERS
import { CreateReview } from "./pages/createReviewPage/CreateReview";
import { ReturnHome } from "./pages/returnHome/ReturnHome";
import { LoginProvider } from "./components/context/LoginContext";
import { UserProvider } from "./components/context/UserContext";
import { AuctionProvider } from "./components/context/AuctionContext";
import { EnumProvider } from "./components/context/EnumContext";
import { SearchProvider } from "./components/context/SearchContext";
import { BidProvider } from "./components/context/BidsContext";
import { ReviewProvider } from "./components/context/ReviewContext";
import { SignupProvider } from "./components/context/SignupContext";
import { AuthProvider } from "./components/context/AuthContext";
import { PubUserProvider } from "./components/context/PubUserContext";
import { ReportsProvider } from "./components/context/ReportsContext";
import { AdminProvider } from "./components/context/AdminContext";

function App() {
  return (
    <AuthProvider>
      <ReportsProvider>
        <PubUserProvider>
          <SignupProvider>
            <LoginProvider>
              <UserProvider>
                <SearchProvider>
                  <EnumProvider>
                    <AuctionProvider>
                      <BidProvider>
                        <ReviewProvider>
                          <AdminProvider>
                            <BrowserRouter>
                              <Routes>
                                <Route path="/" element={<Startpage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                  path="/profile"
                                  element={<ProfilePage />}
                                />
                                <Route
                                  path="/signup"
                                  element={<SignupPage />}
                                />
                                <Route
                                  path="/review"
                                  element={<ReviewPage />}
                                />
                                <Route
                                  path="/auction/find-one/:auctionId"
                                  element={<AuctionPage />}
                                />
                                <Route
                                  path="/create-auction"
                                  element={
                                    <PrivateRoute>
                                      <CreateAuctionPage />
                                    </PrivateRoute>
                                  }
                                />
                                <Route
                                  path="/pubprofile/:userId"
                                  element={<PubProfile />}
                                />
                                <Route
                                  path="/contact"
                                  element={<ContactPage />}
                                />
                                <Route
                                  path="/reviews/create"
                                  element={<CreateReview />}
                                />
                                <Route
                                  path="/return"
                                  element={<ReturnHome />}
                                />
                                <Route path="/admin" element={<AdminPage />} />
                              </Routes>
                            </BrowserRouter>
                          </AdminProvider>
                        </ReviewProvider>
                      </BidProvider>
                    </AuctionProvider>
                  </EnumProvider>
                </SearchProvider>
              </UserProvider>
            </LoginProvider>
          </SignupProvider>
        </PubUserProvider>
      </ReportsProvider>
    </AuthProvider>
  );
}

export default App;
