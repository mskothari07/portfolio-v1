import React from "react";
import Navbar from "../components/Navbar";
import "../css/Work.css";
import "../css/Gallery.css";

export default function Gallery() {
  return (
    <div class="main-gallery">
      <div class="content-gallery">
        <img src="aws.png" alt="Meet Kothari AwS certification" />
        <h3>AWS Cloud Practitioner</h3>
      </div>
      <div class="content">
        <img src="exellent.jpg" alt="Meet Kothari Excellent Performance" />
        <h3>Excellent Performance</h3>
      </div>
      <div class="content">
        <img src="bestP.jpg" alt="Meet Kothari Best Project" />
        <h3>Best Project of year</h3>
      </div>
      <div class="content">
        <img src="value.jpg" alt="Meet Kothari Value Award" />
        <h3>Quarterly Value award</h3>
      </div>
      <div className="footer">
        <Navbar />
      </div>
    </div>
  );
}
