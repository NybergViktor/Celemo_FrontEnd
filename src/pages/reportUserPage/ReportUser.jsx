import { Link, useParams } from "react-router-dom";
import { ReviewContext } from "../../components/context/ReviewContext";
import { useState, useContext, useEffect } from "react";
import "../reportUserPage/RUser.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ReportContext } from "../../components/context/ReportUserContext";

export const CreateReportUserPage = () => {
  const { content, setContent, createReportUser } = useContext(ReportContext);

  const [reportedUserUsername, setReportedUserUsername] = useState("");
  const [reportedId, setReportedId] = useState("");

  const [reportedUserId, setReportedUserId] = useState(
    localStorage.getItem("reportedUserId")
  );
  const [reportedUsername, setReportedUsername] = useState(
    localStorage.getItem("reportedUsername")
  );

  useEffect(() => {
    setReportedId(reportedUserId);
    setReportedUserUsername(reportedUsername);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.error) {
      console.log("error: " + e.error);
    }

    createReportUser();

  };

  return (
    <>
      <Header></Header>
      <main className="report-user-main">
        <div className="report-user-container" key={reportedId}>
          <h1 className="username-report">Report: {reportedUserUsername}</h1>
          <form className="report-user-form-container">
            <label>
              <p className="report-user-p">
                Report Text:{(e) => e.target.value}
              </p>
              <input
                className="report-user-text"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength="50"
                required
                placeholder="max 50 characters"
              />
            </label>

            <button
              className="place-report-button"
              type="submit"
              onClick={handleSubmit}
            >
              <Link to="/return">Place Report</Link>
            </button>
          </form>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};
