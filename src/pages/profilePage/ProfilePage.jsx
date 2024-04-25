import "./ProfilePage.css";
import Footer from "../../components/footer/Footer";
import UserContainer from "../../components/userContainer/UserContainer";
import UserInfoFields from "../../components/userInfoFields/UserInfoFields";

const ProfilePage = () => {
  return (
    <>
      {/* temp header */}
      <header className="header">Header</header>
      <main className="main">
        <div className="userInfoContainer">

          {/* PROFILE PICTURE */}
          <div className="profilePicture">
            <img src="profile_icon.svg"/>
          </div>

          {/* USER INFO CONTAINER */}
          <UserContainer containerTitle="User Info">
            <UserInfoFields></UserInfoFields>
          </UserContainer>

          {/* USERS OWN AUCTIONS */}
          <UserContainer containerTitle="My Auctions" useContainerBtn="yes" btnTitle="Bid History"></UserContainer>

          {/* AUCTIONS */}
          <UserContainer containerTitle="My Favourites"></UserContainer>

        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;