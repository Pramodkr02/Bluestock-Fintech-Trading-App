import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import "./styles.css";

const HighLight = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 highlight-header">
          Bluestock Highlights
        </h2>
        <p className="text-gray-600 mb-1 highlight-subtitle">
          Power-packed with everything you need.
        </p>
        <p
          className="text-gray-600 highlight-subtitle"
          style={{ animationDelay: "0.3s" }}
        >
          Simplified enough for beginners, Detailed enough for experts.
        </p>
        <p
          className="text-gray-600 highlight-subtitle"
          style={{ animationDelay: "0.4s" }}
        >
          Track upcoming IPOs, Leverage advanced tools to make the best
          decisions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Learn Chart Section */}
        <div className="highlight-card learn-chart rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-semibold text-[#4169E1] section-title">
              Learn Chart
            </h3>
            <BsPencilSquare className="text-[#4169E1] text-xl section-icon" />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                1
              </span>
              <span>Technical, Fundamental</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                2
              </span>
              <span>Finology, Facts, Equity</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Trading Psychology</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Risk Assessment</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Option Trading</span>
            </li>
          </ul>
        </div>

        {/* Analytics Section */}
        <div className="highlight-card analytics rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-semibold text-[#E41749] section-title">
              Analytics
            </h3>
            <BiAnalyse className="text-[#E41749] text-xl section-icon" />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                1
              </span>
              <span>Live Sector Trend</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                2
              </span>
              <span>IPO DBHP</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Sectoral Distribution</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Stock Overview</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>TradingView Chart</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Technical, Fundamental</span>
            </li>
          </ul>
        </div>

        {/* Club Section */}
        <div className="highlight-card club rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-semibold text-[#FFA726] section-title">
              Club
            </h3>
            <AiOutlineThunderbolt className="text-[#FFA726] text-xl section-icon" />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                1
              </span>
              <span>Educational Resources</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                2
              </span>
              <span>Real-time Chat</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="number-badge flex items-center justify-center w-6 h-6 rounded-full text-white text-sm">
                3
              </span>
              <span>Forums</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
