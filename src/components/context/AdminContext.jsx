import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {

    const [banUserId, setbanUserId] = useState();
    const [unBanUserId, setUnBanUserId] = useState();

  


  //BAN

  const fetchBanUser = async () => {

    var options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            userId: `${banUserId}`,
          }),
      };


      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/ban`,
          options
        );
        const data = await res.json();
        console.log(data)
      } catch (err) {
        console.log("err: " + err);
      }
  };

  //UNBAN

  const fetchUnBanUser = async () => {

    var options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            userId: `${unBanUserId}`,
          }),
      };

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/unban`,
          options
        );
        const data = await res.json();
        console.log(data)
      } catch (err) {
        console.log("err: " + err);
      }
  };


    return (
        <AdminContext.Provider
          value={{
            banUserId,
            unBanUserId,
            setUnBanUserId,
            setbanUserId

          }}
        >
          {children}
        </AdminContext.Provider>
      );
    };
    
    export { AdminContext, AdminProvider };