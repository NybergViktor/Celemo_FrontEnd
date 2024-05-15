import React from "react";
import "../returnHome/ReturnHStyle.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export const ReturnHome = () => {
  return (
    <>
      <Header />
      <div className="returnMain">
        <div className="returnContainer">
          <Link to="/">
            <button className="returnTo">Return to Homepage</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
