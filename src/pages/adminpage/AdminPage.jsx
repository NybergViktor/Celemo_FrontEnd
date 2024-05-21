import {
  ReportsContext,
  ReportsProvider,
} from "../../components/context/ReportsContext";
import React, { useState } from "react";
import "./AdminPage.css";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../../components/context/ReviewContext";
import Header from "../../components/header/Header";
import { AdminContext } from "../../components/context/AdminContext";
import { UserContext } from "../../components/context/UserContext";

const AdminPage = () => {
  const { allReviews, fetchallReviews } = useContext(ReviewContext);
  const { userAndAdminReports, bannedReports, getAllReports } =
    useContext(ReportsContext);
  const { fetchBanUser, fetchUnBanUser } = useContext(AdminContext);
  const {
    getAllUsers,
    allUsers,
    fetchUserFromIdAdminPage,
    foundUserAdminPage,
  } = useContext(UserContext);
  const [banId, setBanId] = useState("");
  const [findUserId, setFindUserId] = useState("");
  const [findUserToggle, setFindUserToggle] = useState(false);

  useEffect(() => {
    getAllReports();
  }, []);

  useEffect(() => {
    fetchallReviews(allReviews);
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    console.log(findUserId + " finduserid");
  }, [findUserId]);

  function getUser() {
    console.log(findUserId + " find id fetch");
    fetchUserFromIdAdminPage(findUserId);
    setFindUserToggle(true);
    setFindUserId("");
  }

  function reportType(report) {
    if (report.auction === null) {
      return <h4>User Report</h4>;
    } else {
      return <h4>Auction Report</h4>;
    }
  }
  function userRoleReport(report) {
    if (report.reportedUserId.roles[0].name === "ROLE_USER") {
      return <p>Role: User</p>;
    } else if (report.reportedUserId.roles[0].name === "ROLE_BANNED") {
      return <p>Role: Banned</p>;
    } else {
      return <p>Role: Admin</p>;
    }
  }

  function userRoleReview(review) {
    if (review.reviewedUser.roles[0].name === "ROLE_USER") {
      return <p>Role: User</p>;
    } else if (review.reviewedUser.roles[0].name === "ROLE_BANNED") {
      return <p>Role: Banned</p>;
    } else {
      return <p>Role: Admin</p>;
    }
  }

  const handleBanUser = async (id) => {
    if (window.confirm("Are you sure you want to ban this user?")) {
      fetchBanUser(id);
      return;
    }
  };

  const handleUnBanUser = async (id) => {
    if (window.confirm("Are you sure you want to unban this user?")) {
      fetchUnBanUser(id);
      return;
    }
  };
  const handleBanUserButton = async () => {
    if (window.confirm("Are you sure you want to ban this user?")) {
      fetchBanUser(banId);
      return;
    }
  };

  const handleUnBanUserButton = async () => {
    if (window.confirm("Are you sure you want to unban this user?")) {
      fetchUnBanUser(banId);
      return;
    }
  };

  const handleInputChange = (event) => {
    setBanId(event.target.value);
  };

  function handleToggle() {
    if (findUserToggle === true) {
      setFindUserToggle(false);
    }
    if (findUserToggle === false) {
      setFindUserToggle(true);
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
            {userAndAdminReports.map((report) => (
              <div className="reviewBox" key={report.id}>
                {reportType(report)}
                <p>Reported by user: {report.reportingUserId.username}</p>
                <p>Reported user: {report.reportedUserId.username}</p>
                {userRoleReport(report)}
                <p>{report.content}</p>
                <div className="buttons-ban-unban">
                  <button
                    className="ban-user"
                    onClick={() => handleBanUser(report.reportedUserId.id)}
                  >
                    Ban user
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ReviewsContainer">
          <h2>Banned</h2>
          <div className="reviewHolder">
            {bannedReports.map((report) => (
              <div className="reviewBox" key={report.id}>
                {reportType(report)}
                <p>Reported by user: {report.reportingUserId.username}</p>
                <p>Reported user: {report.reportedUserId.username}</p>
                {userRoleReport(report)}
                <p>{report.content}</p>
                <div className="buttons-ban-unban">
                  <button
                    className="unban-user"
                    onClick={() => handleUnBanUser(report.reportedUserId.id)}
                  >
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
                  <button
                    className="ban-user"
                    onClick={() => handleBanUser(review.reviewedUser.id)}
                  >
                    Ban user
                  </button>
                  <button
                    className="unban-user"
                    onClick={() => handleUnBanUser(review.reviewedUser.id)}
                  >
                    Unban user
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* get all users */}
        <div className="ReviewsContainerUsers">
          <h2>All Users</h2>
          <div className="reviewHolderUsers">
            {allUsers.map((user) => (
              <div className="reviewBoxUsers" key={user.id}>
                <div className="usersPhoto">
                  <img className="realPic" src={user.photo}></img>
                </div>
                <p>ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>FirstName: {user.firstName}</p>
                <p>LastName: {user.lastName}</p>
                <p>Role: {user.roles[1]}</p>
                <p>Balance: {user.balance}</p>
                <p>CreatedAt: {user.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="ReviewsContainer">
          <h2>Find User by ID</h2>
          <div>
            <div className="form-group">
              <label htmlFor="findUserId">Enter User Id below!</label>
              <input
                type="text"
                className="form-control"
                id="findUserId"
                aria-describedby="textHelp"
                placeholder="User Id"
                value={findUserId}
                onChange={(e) => setFindUserId(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                Make sure id is correct.
              </small>
            </div>

            <button className="btn btn-primary" onClick={getUser}>
              Find
            </button>
          </div>
        </div>

        {findUserToggle && (
          <div className="foundUser">
            <div className="reviewBoxUsers" key={foundUserAdminPage.id}>
              <div className="usersPhoto">
                <img className="realPic" src={foundUserAdminPage.photo}></img>
              </div>
              <p>ID: {foundUserAdminPage.id}</p>
              <p>Username: {foundUserAdminPage.username}</p>
              <p>Email: {foundUserAdminPage.email}</p>
              <p>FirstName: {foundUserAdminPage.firstName}</p>
              <p>LastName: {foundUserAdminPage.lastName}</p>
              <p>Balance: {foundUserAdminPage.balance}</p>
              <p>CreatedAt: {foundUserAdminPage.createdAt}</p>

              <div className="closebuttonDiv">
                <button className="closeButton" onClick={handleToggle}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="ReviewsContainer">
          <h2>Ban/Unban User</h2>
          <form>
            <div className="form-group">
              <label htmlFor="banUserId">Enter User Id below!</label>
              <input
                type="text"
                className="form-control"
                id="banUserId"
                aria-describedby="emailHelp"
                placeholder="User Id"
                value={banId}
                onChange={handleInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Make sure id is correct.
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleBanUserButton}
            >
              Ban
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUnBanUserButton}
            >
              Unban
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
