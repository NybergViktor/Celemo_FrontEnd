import "./UserInfoFields.css";
import LoginContext from "../context/LoginContext";
import UserContext from "../context/UserContext";
import { useEffect, useContext, useState } from "react";

{/** klass "field1" osv ska det skickas in info från databasen */}

const UserInfoFields = () => {

  const {loggedInUser} = useContext(LoginContext);
  const {getUserFromId, privateUserInfo, userId} = useContext(UserContext);

  const [testUser, setTestUser] = useState([]);
  setTestUser(loggedInUser);

  // useEffect(() => {
  //   if (loggedInUser) {
      
  //     getUserFromId();
  //   }
  // }, []);

  return (
    <section className="fieldsMainContainer">
      <div className="fieldContainer">
        <p className="fieldName">Username:</p>
        <div className="fieldContent field1">
          {testUser.map((user) => {
            return (
              <p>{user.id}</p>
            )
          })}
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
