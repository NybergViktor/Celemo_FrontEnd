import "./EditProfile.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/UserContext";
import { AuthContext } from "../../components/context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";

const EditProfile = () => {
  const { fetchUpdateUser, getUserFromId, userData, fetchDeleteUser } =
    useContext(UserContext);
  const { logout } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [userValue, setuserValue] = useState({
    userId: loggedInUser.id,
  });

  useEffect(() => {
    getUserFromId(loggedInUser.id);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserValue({ ...userValue, [name]: value });
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      fetchDeleteUser(userData.id);
      await logout();
      window.location.href = "/";
    }
  };

  const handleSubmit = (e, userValue) => {
    e.preventDefault();
    if (userData.password === null) {
      delete userValue.password;
    }
    if (userValue.error) {
      console.log("error: " + userValue.error);
    }
    fetchUpdateUser(userValue);
    console.log(userValue);
    window.location.href = "/profile";
  };

  return (
    <>
      <Header></Header>
      <div className="signupBody">
        <div className="signUpContainer">
          <div className="editProfileHeader">
            {" "}
            Edit profile {userData.username}
          </div>
          <div className="editProfileHolder">
            <form className="signUpForm">
              <div className="editProfileInfo">
                <p>First name</p>
                <input
                  name="firstName"
                  value={userValue.firstName}
                  type="text"
                  id="fname"
                  className="inputFname"
                  placeholder={userData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="editProfileInfo">
                <p>Last name</p>
                <input
                  name="lastName"
                  value={userValue.lastName}
                  type="text"
                  id="lname"
                  className="inputLname"
                  placeholder={userData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="editProfileInfo">
                <p>Email</p>
                <input
                  name="email"
                  value={userValue.email}
                  type="email"
                  id="email"
                  className="inputEmail"
                  placeholder={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="editProfileInfo">
                <p>Gender</p>
                <select
                  name="gender"
                  placeholder={userData.gender}
                  onChange={handleChange}
                >
                  <option value="">Choose gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>{" "}
              </div>

              <div className="editProfileInfo">
                <p>Date of birth</p>
                <input
                  name="dateOfBirth"
                  value={userValue.dateOfBirth}
                  type="date"
                  id="dob"
                  className="inputDOB"
                  placeholder={userData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="editProfileInfo">
                <p>Street Adress</p>
                <input
                  name="adress_street"
                  value={userValue.adress_street}
                  type="text"
                  id="adress"
                  className="inputAdress"
                  placeholder={userData.adress_street}
                  onChange={handleChange}
                />
              </div>

              <div className="editProfileInfo">
                <p>City</p>
                <input
                  name="adress_city"
                  value={userValue.adress_city}
                  type="text"
                  id="city"
                  className="inputCity"
                  placeholder={userData.adress_city}
                  onChange={handleChange}
                />
              </div>
              <div className="editProfileInfo">
                <p>Postal code</p>
                <input
                  name="adress_postalCode"
                  value={userValue.adress_postalCode}
                  type="number"
                  id="postal"
                  className="inputPostal"
                  placeholder={userData.adress_postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="editProfileInfo">
                <p>Password</p>
                <input
                  name="password"
                  value={userValue.password}
                  type="password"
                  id="password"
                  className="inputPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <button
                id="signUpButton"
                onClick={(e) => handleSubmit(e, userValue)}
                className="signUpButton"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="editProfileDeleteAccount">
        <div className="deleteAccountHeader">
          Warning, deleting your account makes you lose everything stored on the
          site.
        </div>
        <button
          id="deleteAccountButton"
          className="deleteAccountButton"
          onClick={handleDelete}
        >
          Delete account
        </button>
      </div>

      <Footer></Footer>
    </>
  );
};

export default EditProfile;
