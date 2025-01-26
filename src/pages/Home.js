import React from "react";
import "../css/Home.css";

export default function Home() {
  const crossLogo = "/og-cross.svg";
  return (
    <div className="main-body">
      {/* Top left to right */}
      <marquee className="marquee-top">
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Web Developer</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>More than two years on experience</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Working at</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>ITC Infotech</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Cloud Application Developer</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Digital Marketing</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Search Engine Optimisation</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Etc....</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
      </marquee>
      {/* Bottom  right to left*/}
      <marquee direction="right" className="marquee-bottom">
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Frontend</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Backend</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Databases</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Cloud</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>AWS</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>GCP</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Version Control</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
        <span>Project Management</span>
        <span>
          <img src={crossLogo} loading="lazy" alt="" class="image" />
        </span>
      </marquee>
      {/* left top to bottom */}
      <marquee direction="down" className="marquee-left">
        <div class="marquee-content-left">
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>Explore</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>Checkout</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>to dooo..</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>connect !!</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>goood ???</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>soonn</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>pages??</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
        </div>
      </marquee>
      {/* Right Bottom to top */}
      <marquee direction="up" className="marquee-right">
        <div class="marquee-content-right">
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>css</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
          <span>xD</span>
          <span>
            <img src={crossLogo} loading="lazy" alt="" class="image" />
          </span>
        </div>
      </marquee>
      <div className="home_wrapper">
        <div className="logo">
          <img className="logo_home" loading="lazy" src="/logo.png" alt="Logo" />
        </div>
        <div class="container">
          <a className="home_topleft w-inline-block" href="/work">
            <div className="home-title">Work</div>
          </a>
          <a className="home_topright w-inline-block" href="/skills">
            <div className="home-title">Skills</div>
          </a>
          <a className="home_bottomleft w-inline-block" href="/about">
            <div className="home-title">About</div>
          </a>
          <a className="home_bottomright w-inline-block" href="/connect">
            <div className="home-title">Connect</div>
          </a>
        </div>
      </div>
    </div>
  );
}
