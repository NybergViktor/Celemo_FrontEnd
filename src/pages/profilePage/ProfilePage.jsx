import "./ProfilePage.css";
import Footer from "../../components/footer/Footer";
import UserContainer from "../../components/userContainer/UserContainer";
import UserInfoFields from "../../components/userInfoFields/UserInfoFields";
import UserContainerContent from "../../components/userContainerContent/UserContainerContent";
import Header from "../../components/header/Header";
import UserContext from "../../components/context/UserContext";
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
            <UserContainerContent btnTitle="Edit"></UserContainerContent>
          </UserContainer>

          {/* AUCTIONS */}
          <UserContainer
            containerTitle="Auctions"
            useContainerBtn="yes"
            btnTitle="Bid History"
            >
            <UserContainerContent></UserContainerContent>
          </UserContainer>

          {/* FAVOURITES */}
          <UserContainer containerTitle="My Favourites">
            <UserContainerContent></UserContainerContent>
          </UserContainer>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default ProfilePage;
