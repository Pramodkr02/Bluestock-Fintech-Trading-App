import React from "react";
import "./styles.css";
import { FaChartLine, FaBlog, FaPlay } from "react-icons/fa";

const MobileCard = () => {
  return (
    <div className="mobile-card-container">
      {/* Why do traders love bluestock? section */}
      <div className="love-section">
        <div className="love-content">
          <h2 className="love-title">Why do traders love bluestock?</h2>
          <p className="love-description">
            Bluestock caters to traders looking to enhance their technical
            analysis skills, providing a user-friendly environment to interpret
            and leverage charts effectively for strategic decision-making in the
            financial markets.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon analytics">
                <FaChartLine />
              </div>
              <span>Analytics</span>
            </div>
            <div className="feature-box">
              <div className="feature-icon blogs">
                <FaBlog />
              </div>
              <span>Blogs</span>
            </div>
            <div className="feature-box">
              <div className="feature-icon videos">
                <FaPlay />
              </div>
              <span>Videos</span>
            </div>
          </div>
        </div>

        <div className="shark-investor">
          <div className="shark-circle">
            <span>Shark</span>
            <span>Investor</span>
          </div>
          <div className="confetti"></div>
        </div>
      </div>

      {/* Resources section */}
      <div className="resources-section">
        <div className="tag">Resources</div>
        <h3 className="resources-title">All things finance,right here</h3>
        <p className="resources-description">
          Master the art of investing and secure your financial future with
          Bluestock learning resources.
        </p>
      </div>

      {/* Mobile app preview section */}
      <div className="mobile-preview-section">
        <div className="preview-content">
          <h3 className="preview-title">On The Go</h3>
          <p className="preview-description">
            We believe that everyone should be able to wield technology while
            being trading! Use Bluestock on the go on your mobile device.
            Experience the ultimate trading experience on Android or iOS.
          </p>

          <div className="download-section">
            <h4>Scan and download</h4>
            <p>Use your android device to download the app</p>
            <div className="qr-code"></div>
          </div>
        </div>

        <div className="app-mockup">
          <div className="phone-frame">
            <div className="app-screen">
              <div className="app-header">
                <span>BLUESTOCK</span>
              </div>
              <div className="market-overview">
                <div className="greeting">Namaste, Yash Kale 🙏</div>
                <div className="charts">
                  <div className="chart-row">
                    <div className="chart-item">
                      <span className="stock">SENSEX</span>
                      <div className="chart-line green"></div>
                    </div>
                    <div className="chart-item">
                      <span className="stock">NIFTY 50</span>
                      <div className="chart-line red"></div>
                    </div>
                  </div>
                  <div className="chart-row">
                    <div className="chart-item">
                      <span className="stock">BANK NIFTY</span>
                      <div className="chart-line green"></div>
                    </div>
                    <div className="chart-item">
                      <span className="stock">NIFTY IT</span>
                      <div className="chart-line red"></div>
                    </div>
                  </div>
                </div>
                <div className="bottom-nav">
                  <span>Home</span>
                  <span>Dashboard</span>
                  <span>Analytics</span>
                  <span>Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
