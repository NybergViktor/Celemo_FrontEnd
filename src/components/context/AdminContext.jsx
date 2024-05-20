import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {

   


  //BAN

  const fetchBanUser = async (id) => {

    var options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            userId: `${id}`,
          }),
      };


      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/user/admin/ban`,
          options
        );
        const data = await res.json();
        console.log(data)
      } catch (err) {
        console.log("err: " + err);
      }
  };

  //UNBAN

  const fetchUnBanUser = async (id) => {

    var options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            userId: `${id}`,
          }),
      };

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/user/admin/unban`,
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
            fetchBanUser,
            fetchUnBanUser

          }}
        >
          {children}
        </AdminContext.Provider>
      );
    };
    
    export { AdminContext, AdminProvider };