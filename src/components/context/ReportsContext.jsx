import React, { createContext, useState } from "react";

const ReportsContext = createContext();

const ReportsProvider = ({ children }) => {
  const [userAndAdminReports, setUserAndAdminReports] = useState([]);
  const [bannedReports, setBannedReports] = useState([]);

  const getAllReports = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/reports/find/all`,
        options
      );
      const fetchData = await response.json();

      console.log(fetchData);

      const userAndAdminReports = fetchData.filter(item => {
        return item.reportedUserId &&
               item.reportedUserId.roles &&
               item.reportedUserId.roles.some(role => role.name === 'ROLE_USER' || role.name === 'ROLE_ADMIN');
      });

      const bannedReports = fetchData.filter(item => {
        return item.reportedUserId &&
               item.reportedUserId.roles &&
               item.reportedUserId.roles.some(role => role.name === 'ROLE_BANNED');
      });

      setUserAndAdminReports(userAndAdminReports);
      setBannedReports(bannedReports);

      console.log('User and Admin Reports:', userAndAdminReports);
      console.log('Banned Reports:', bannedReports);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  return (
    <ReportsContext.Provider
      value={{
        getAllReports,
        userAndAdminReports,
        bannedReports
      }}
    >
      {children}
    </ReportsContext.Provider>
  );
};
export { ReportsContext, ReportsProvider };
