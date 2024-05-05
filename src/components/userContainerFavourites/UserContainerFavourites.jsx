import "./UserContainerFavourites.css";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const UserContainerFavourites = ({ btnTitle }) => {
  const { userData, getUserFromId, favourites } = useContext(UserContext);
  const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));

  useEffect(() => {
    getUserFromId(loggedInUserId);
    // console.log(userData);
  }, []);

  return (
    <div className="userContainerContentMain">
      
            {favourites.map((fav) => {
              return (
            <div key={fav.id} className="containerItem">
              <div className="dynamicItem">
                <p>Title: {fav.title}, Celebrity: {fav.celebrityName}</p>
              </div>
              <div className="containerItemBtn">
                <button className="dynamicItemBtn">{btnTitle}</button>
              </div>
            </div>
          );
            })}
       
    </div>
  );
};

export default UserContainerFavourites;
