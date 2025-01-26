import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Connect.css";

export default function Connect() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="connect-wrapper">
      <div className="content-left">
        <form
          action="https://getform.io/f/bejjroea"
          method="POST"
          className="payment-form"
        >
          <h1 className="form-heading">Let's Connect</h1>
          <h1 className="form-inputs">Name</h1>
          <input
            className="input-fileds"
            required
            type="text"
            name="name"
            placeholder="Looking forwad to connect with you!"
          ></input>
          <h3 className="form-inputs">Email</h3>
          <input
            className="input-fileds"
            type="email"
            name="email"
            placeholder="Hope it is correct"
            required
          ></input>
          <h3 className="form-inputs" type="text" required>
            Message
          </h3>
          <textarea
            className="input-fileds message-field"
            type="text"
            name="message"
            placeholder="I'm all ears.."
            rows="10"
          ></textarea>
          <button type="Submit">Submit</button>
        </form>
      </div>
      <div className="content-right">
        <button
          className="close-tab {`close-tab ${isFading ? 'fade-out' : ''}`}"
          onClick={navigateToHome}
        >
          <img src="og-cross.svg" />
        </button>
        <div className="social-logos">
          <a
            href="https://www.linkedin.com/in/kothari-meet/"
            className="logo-a"
          >
            <img alt="Meet Kothari LinkedIn" src="linkedIn-logo.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/kothari-meet/"
            className="logo-a"
          >
            <img alt="Meet Kothari Twitter Handle" src="twitter-logo.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/kothari-meet/"
            className="logo-a"
          >
            <img alt="Meet Kothari Medium" src="medium-loog.png" />
          </a>
          <a href="https://github.com/mskothari07" className="logo-a">
            <img alt="Meet Kothari GitHub" src="github-logo.png" />
          </a>
        </div>
        <div className="ResumeDownloader">
          <a
            className="download"
            href="meet_kothari_resume_updated.pdf"
            download="Meet Kothari Resume"
          >
            Download Resume
          </a>
          
        </div>
        <span class="copyright">Copyright 2024 © Meet Kothari</span>
      </div>
    </div>
  );
}
