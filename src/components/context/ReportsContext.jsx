import React, { createContext, useState } from "react";

const ReportsContext = createContext();

const ReportsProvider = ({ children }) => {
  const [reportsData, setReportsData] = useState([]);

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
      setReportsData(fetchData);
      console.log(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  return (
    <ReportsContext.Provider
      value={{
        reportsData,
        getAllReports,
      }}
    >
      {children}
    </ReportsContext.Provider>
  );
};
export { ReportsContext, ReportsProvider };
