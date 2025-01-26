import React from "react";
import Navbar from "../components/Navbar";
import "../css/Work.css";
import "../css/skills.css";

export default function Skills() {
  const scrollLeft = () => {
    window.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    window.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="skills">
      <div className="skills-heading">
        <h1>Techonlogy.</h1>
        <h1>Softwares.</h1>
        <h1>Devtools.</h1>
      </div>
      <div className="skills-container">
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original-wordmark.svg" />
        </a>
        <a className="skills-content">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
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
