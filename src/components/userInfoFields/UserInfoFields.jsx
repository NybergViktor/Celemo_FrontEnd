import "./UserInfoFields.css";
import { UserContext } from "../../context/UserContext";
import { useEffect, useContext, useState } from "react";

const UserInfoFields = () => {
  const { userData, getUserFromId } = useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    getUserFromId(loggedInUserId);
  }, []);

  return (
    <section className="fieldsMainContainer">
      <div className="fieldContainer">
        <p className="fieldName">Username:</p>
        <div className="fieldContent">
          <p>{userData.username}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Firstname:</p>
        <div className="fieldContent">
          <p>{userData.firstName}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Lastname:</p>
        <div className="fieldContent">
          <p>{userData.lastName}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Email:</p>
        <div className="fieldContent">
          <p>{userData.email}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Age:</p>
        <div className="fieldContent">
          <p>{userData.dateOfBirth}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Gender:</p>
        <div className="fieldContent">
          <p>{userData.gender}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Street:</p>
        <div className="fieldContent">
          <p>{userData.adress_street}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Postal Code:</p>
        <div className="fieldContent">
          <p>{userData.adress_postalCode}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">City:</p>
        <div className="fieldContent">
          <p>{userData.adress_city}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Grade:</p>
        <div className="fieldContent">
          <p>{Math.round(userData.grade)}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Balance:</p>
        <div className="fieldContent">
          <p>{userData.balance} Coins</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfoFields;
