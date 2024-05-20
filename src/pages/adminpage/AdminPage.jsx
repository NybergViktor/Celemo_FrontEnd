import {
  ReportsContext,
  ReportsProvider,
} from "../../components/context/ReportsContext";
import "./AdminPage.css";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../../components/context/ReviewContext";
import Header from "../../components/header/Header";
import { AdminContext } from "../../components/context/AdminContext";

const AdminPage = () => {
  const { allReviews, fetchallReviews } = useContext(ReviewContext);
  const { reportsData, getAllReports } = useContext(ReportsContext);
  const { setUnBanUserId, setbanUserId, banUserId, unBanUserId } =
    useContext(AdminContext);

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

  function banUser(banid) {
    setbanUserId(banid);
    banUserId;
  }
  function unBanUser(unbanid) {
    setUnBanUserId(unbanid);
    unBanUserId;
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
              <div className="reviewBox" key={report.id}>
                {reportType(report)}
                <p>{report.reportingUserId.username}</p>
                <p>{report.content}</p>
                <div className="buttons-ban-unban">
                  <button onClick={banUser(report.reportingUserId)}>
                    Ban user
                  </button>
                  <button onClick={unBanUser(report.reportingUserId)}>
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
