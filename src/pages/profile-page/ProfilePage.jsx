import "./ProfilePage.css";
import Footer from "../../components/footer/Footer";
import UserContainer from "../../components/user-container/UserContainer";

const ProfilePage = () => {
  return (
    <>
      {/* temp header */}
      <header className="header">Header</header>
      <main className="main">
        <div className="user-info-container">
          {/* PROFILE PICTURE */}
          <div className="profile-picture"></div>

          {/* USER INFO CONTAINER */}
          <UserContainer title="User Info"></UserContainer>

          {/* USERS OWN AUCTIONS */}
          <UserContainer title="My Auctions"></UserContainer>

          {/* AUCTIONS */}
          <UserContainer title="My Favourites"></UserContainer>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;