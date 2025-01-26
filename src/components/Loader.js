// LoadingAnimation.js
import React from "react";
import "../css/Loader.css";

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <div className="spinner" />
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingAnimation;
