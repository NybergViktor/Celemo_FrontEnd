import React from "react";
import { createContext, useState, useEffect } from "react";

const ReportUserContext = createContext();

const ReportUserProvider = ({ children }) => {
  const [content, setContent] = useState("");
  const [createdById, setCreatedById] = useState();
  const [reportedId, setReportedId] = useState();

  const [reportedUserId, setReportedUserId] = useState(
    localStorage.getItem("reportedUserId")
  );

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    setCreatedById(loggedInUserId);
    setReportedId(reportedUserId);
  }, []);

  const createReportUser = async () => {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        content: `${content}`,
        reportedUserId: `${reportedId}`,
        reportingUserId: `${createdById}`,
      }),
    };

    try {
      console.log(options);

      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/reports/report/user`,
        options
      );
      const data = await res.json();
      console.log(data);
      setContent("")
      setReportedId("")
      setCreatedById("")
    } catch (err) {
      console.log("err: " + err);
    }
  };
  return (
    <ReportUserContext.Provider
      value={{
        createReportUser,
        content,
        setContent,
      }}
    >
      {children}
    </ReportUserContext.Provider>
  );
};
export { ReportUserContext, ReportUserProvider };
