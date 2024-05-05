import "./ProfilePage.css";
import Footer from "../../components/footer/Footer";
import UserContainer from "../../components/userContainer/UserContainer";
import UserInfoFields from "../../components/userInfoFields/UserInfoFields";
import UserContainerMyAuctions from "../../components/userContainerMyAuctions/UserContainerMyAuctions";
import UserContainerAuctions from "../../components/userContainerAuctions/UserContainerAuctions";
import UserContainerFavourites from "../../components/userContainerFavourites/UserContainerFavourites";
import Header from "../../components/header/Header";
import {UserContext} from "../../components/context/UserContext";
import { useEffect, useContext, useState } from "react";

const ProfilePage = () => {

  const { userData, getUserFromId} = useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));

  useEffect(() => {
    getUserFromId(loggedInUserId);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="userInfoContainer">
          {/* PROFILE PICTURE */}
          <div className="profilePicture">
            <img src={userData.photo} />
          </div>

          {/* USER INFO CONTAINER */}
          <UserContainer
            containerTitle="User Info"
            useContainerBtn="yes"
            btnTitle="Edit"
            >
            <UserInfoFields></UserInfoFields>
          </UserContainer>

          {/* USERS OWN AUCTIONS */}
          <UserContainer containerTitle="My Auctions">
            <UserContainerMyAuctions btnTitle="Edit"></UserContainerMyAuctions>
          </UserContainer>

          {/* AUCTIONS */}
          <UserContainer
            containerTitle="Auctions"
            useContainerBtn="yes"
            btnTitle="Bid History"
            >
            <UserContainerAuctions></UserContainerAuctions>
          </UserContainer>

          {/* FAVOURITES */}
          <UserContainer containerTitle="My Favourites">
            <UserContainerFavourites></UserContainerFavourites>
          </UserContainer>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default ProfilePage;
