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
  function userRoleReport (report) {
    if (report.reportedUserId.roles[0].name === "ROLE_USER") {
      return <p>Role: User</p>
    } else if (report.reportedUserId.roles[0].name === "ROLE_BANNED") {
      return <p>Role: Banned</p>
    }
     else {
      return <p>Role: Admin</p>
    }
  }

  function userRoleReview (review) {
    if (review.reviewedUser.roles[0].name === "ROLE_USER") {
      return <p>Role: User</p>
    } else if (review.reviewedUser.roles[0].name === "ROLE_BANNED") {
      return <p>Role: Banned</p>
    }
     else {
      return <p>Role: Admin</p>
    }
  }

  const handleBanUser = async (id) => {
    if (window.confirm("Are you sure you want to ban this user?")) {
      fetchBanUser(id);
      return
    }
  }

  const handleUnBanUser = async (id) => {
    if (window.confirm("Are you sure you want to unban this user?")) {
      fetchUnBanUser(id);
      return
    }
  }


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
                <p>Reported by user: {report.reportingUserId.username}</p>
                <p>Reported user: {report.reportedUserId.username}</p>
                {userRoleReport(report)}
                <p>{report.content}</p>
                <div className="buttons-ban-unban">
                  <button className="ban-user" onClick={() => handleBanUser(report.reportedUserId.id)}>
                    Ban user
                  </button>
                  <button className="unban-user" onClick={() => handleUnBanUser(report.reportedUserId.id)}>
                    Unban user
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
                <p>Reviewed user: {review.reviewedUser.username}</p>
                {userRoleReview(review)}
                <p>{review.reviewText}</p>
                <p>{review.grade}</p>
                <div className="buttons-ban-unban">
                  <button className="ban-user" onClick={() =>handleBanUser(review.reviewedUser.id)}>
                    Ban user
                  </button>
                  <button className="unban-user" onClick={() =>handleUnBanUser(review.reviewedUser.id)}>
                    Unban user
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
