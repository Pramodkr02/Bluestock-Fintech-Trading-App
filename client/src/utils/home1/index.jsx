import React from "react";
import "./styles.css";

const Home1 = () => {
  return (
    <div className="home1-container">
      <div className="content-wrapper pr-14 pl-5">
        <div className="left-content">
          <div className="new-tag">
            <span className="tag">NEW</span>
            <span className="version">App 2.0</span>
            <span className="arrow">→</span>
          </div>

          <h1 className="main-title">
            <span className="title-line">Free & Open</span>
            <span className="title-line">Stock Market Analytics</span>
            <span className="title-line">For GenZ</span>
          </h1>

          <p className="description">
            Thousands of traders and investors in India use our stable and
            reliable mobile app regularly.
          </p>

          <div className="built-section">
            <p className="built-text">Built for a growing India.</p>
            <div className="features">
              <div className="feature-item">
                <span className="purple">It's easy</span>
              </div>
              <div className="feature-item">
                <span className="black">It's powerful</span>
              </div>
              <div className="feature-item">
                <span className="purple">It's beautiful</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="app-preview">
            {/* App preview image or component will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
