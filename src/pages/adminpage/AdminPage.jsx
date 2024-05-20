import {
  ReportsContext,
  ReportsProvider,
} from "../../components/context/ReportsContext";
import React from "react";
import "./AdminPage.css";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../../components/context/ReviewContext";
import Header from "../../components/header/Header";
import { AdminContext } from "../../components/context/AdminContext";

const AdminPage = () => {
  const { allReviews, fetchallReviews } = useContext(ReviewContext);
  const { reportsData, getAllReports } = useContext(ReportsContext);
  const {
    banUserId,
    unBanUserId,
    setUnBanUserId,
    setbanUserId,
    fetchBanUser,
    fetchUnBanUser,
  } = useContext(AdminContext);

  useEffect(() => {
    getAllReports(reportsData);
  }, []);

  useEffect(() => {
    fetchallReviews(allReviews);
  }, []);

  function reportType(report) {
    if (report.auction === null) {
      return <h4>User Report</h4>;
    } else {
      return <h4>Auction Report</h4>;
    }
  }

  //   function banUser(banid) {
  //     setbanUserId(banid);
  //     fetchBanUser();
  //   }
  //   function unBanUser(unbanid) {
  //     setUnBanUserId(unbanid);
  //     fetchUnBanUser();
  //   }

//   useEffect(() => {
//     fetchBanUser();
//     fetchUnBanUser();
//   }, [banUserId, unBanUserId]);



  return (
    <>
      <Header />
      <div className="adminPage">
        <h1>Admin Page</h1>

        <div className="ReviewsContainer">
          <h2>Reports</h2>
          <div className="reviewHolder">
            {reportsData.map((report) => (
              <div className="reviewBox" key={report.id} >
                {reportType(report)}
                <p>{report.reportedUserId.username}</p>
                <p>{report.content}</p>
                <div className="buttons-ban-unban">
                  <button onClick={() => fetchBanUser(report.reportedUserId.id)}>
                    Ban user
                  </button>
                  <button onClick={() => fetchUnBanUser(report.reportedUserId.id)}>
                    unBan user
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ReviewsContainer">
          <h2>Reviews</h2>
          <div className="reviewHolder">
            {allReviews.map((review) => (
              <div className="reviewBox" key={review.id}>
                <p>{review.reviewedUser.username}</p>
                <p>{review.reviewText}</p>
                <p>{review.grade}</p>
                <button>Ban user</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
