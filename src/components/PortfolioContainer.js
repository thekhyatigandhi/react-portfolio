//importing pages - dynamic components

import React, { useState } from "react";
import Nav from "./Navigation";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";

//if statements to render correct page according to user click
function PortfolioContainer({ currentPage }) {
  // const renderPage = () => {
  function renderPage() {
    switch (currentPage.name) {
      case "about me":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }

  // const handlePageChange = (page) => setCurrentPage(page);
  // //render correct page
  return (
    <div>
      <div>{renderPage()}</div>
    </div>
  );
}
export default PortfolioContainer;
