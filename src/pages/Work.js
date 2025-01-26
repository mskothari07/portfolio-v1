import React from "react";
import Navbar from "../components/Navbar";
import "../css/Work.css";

export default function Work() {
  const scrollLeft = () => {
    window.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    window.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="work">
      <div className="work-heading">
        <h1>Projects.</h1>
        <h1>Work.</h1>
        <h1>Experience.</h1>
      </div>
      <div className="projects-container">
        <a className="project-content">
          <img src="booking-.com-clone.svg" />
        </a>
        <a className="project-content">
          <img src="ecom-using-redux-redux-saga.svg" />
        </a>
        <a className="project-content">
          <img src="noteIT_app.svg" />
        </a>
        <a className="project-content">
          <img src="Reflective_journal.svg" />
        </a>
        <a className="project-content">
          <img src="my-portfolio.svg" />
        </a>
      </div>
      <div className="scroll-buttons">
        <img
          src="arrow.svg"
          alt="Scroll Left"
          style={{ transform: "rotate(-180deg)", cursor: "pointer" }}
          className="scroll-button"
          onClick={scrollLeft}
        />
        <img
          src="arrow.svg"
          alt="Scroll Right"
          className="scroll-button"
          onClick={scrollRight}
        />
      </div>
      <div className="footer">
        <Navbar />
      </div>
    </div>
  );
}
