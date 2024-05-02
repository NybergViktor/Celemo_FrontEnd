import "./UserInfoFields.css";
import UserContext from "../context/UserContext";
import { useEffect, useContext, useState } from "react";

{
  /** klass "field1" osv ska det skickas in info från databasen */
}

const UserInfoFields = () => {
  
  const { getUserFromId, userId, privateUserInfo} = useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let data = getUserFromId(loggedInUserId);
    setUserInfo(data);
  }, []);

  console.log(userInfo)

  return (
    <section className="fieldsMainContainer">
      <div className="fieldContainer">
        <p className="fieldName">Username:</p>
        <div className="fieldContent field1">
          <p>{userInfo.firstName}</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Firstname:</p>
        <div className="fieldContent field2">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Lastname:</p>
        <div className="fieldContent field3">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Email:</p>
        <div className="fieldContent field4">
          <p>torbjörn.samuelsson1566@hotmail.comabcde</p>
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Age:</p>
        <div className="fieldContent field5">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Gender:</p>
        <div className="fieldContent field6">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Street:</p>
        <div className="fieldContent field7">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Postal Code:</p>
        <div className="fieldContent field8">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">City:</p>
        <div className="fieldContent field9">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Grade:</p>
        <div className="fieldContent field10">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
      <div className="fieldContainer">
        <p className="fieldName">Balance:</p>
        <div className="fieldContent field11">
          <p>text</p> {/** Dessa är placeholder, skall tas bort */}
        </div>
      </div>
    </section>
  );
};

export default UserInfoFields;