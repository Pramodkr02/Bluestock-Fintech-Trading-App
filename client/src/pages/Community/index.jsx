import React from "react";
import { Link } from "react-router-dom";
import {
  HiUserGroup,
  HiChat,
  HiLightningBolt,
  HiTrendingUp,
  HiArrowRight,
} from "react-icons/hi";
import { FaDiscord, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./styles.css";

const CommunityCard = ({ icon: Icon, title, description, link, color }) => (
  <div className={`community-card ${color}`}>
    <div className="card-content">
      <div className="icon-wrapper">{Icon && <Icon className="h-8 w-8" />}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={link} className="card-link">
        Join now <HiArrowRight className="arrow-icon" />
      </Link>
    </div>
    <div className="card-bg"></div>
  </div>
);

const StatCard = ({ count, label, icon: Icon }) => (
  <div className="stat-card">
    {Icon && <Icon className="stat-icon" />}
    <div className="stat-content">
      <h4 className="stat-count">{count}</h4>
      <p className="stat-label">{label}</p>
    </div>
  </div>
);

const Community = () => {
  return (
    <div className="community-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          Join Our Growing{" "}
          <span className="text-gradient">Trading Community</span>
        </h1>
        <p className="hero-description">
          Connect with fellow traders, share insights, and stay updated with the
          latest market trends
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <StatCard count="10K+" label="Active Members" icon={HiUserGroup} />
        <StatCard count="50K+" label="Daily Messages" icon={HiChat} />
        <StatCard count="24/7" label="Live Support" icon={HiLightningBolt} />
        <StatCard count="95%" label="Growth Rate" icon={HiTrendingUp} />
      </div>

      {/* Community Platforms */}
      <div className="platforms-section">
        <h2 className="section-title">Join Us On Your Favorite Platform</h2>
        <div className="platforms-grid">
          <CommunityCard
            icon={FaDiscord}
            title="Discord Community"
            description="Join our Discord server for real-time market discussions and trading signals"
            link="/discord"
            color="discord"
          />
          <CommunityCard
            icon={FaTelegram}
            title="Telegram Channel"
            description="Get instant updates and market analysis directly on Telegram"
            link="/telegram"
            color="telegram"
          />
          <CommunityCard
            icon={FaWhatsapp}
            title="WhatsApp Group"
            description="Connect with traders in your region through our WhatsApp groups"
            link="/whatsapp"
            color="whatsapp"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>Live Market Discussions</h3>
          <p>
            Participate in real-time market discussions with experienced traders
          </p>
        </div>
        <div className="feature-card">
          <h3>Trading Signals</h3>
          <p>Receive curated trading signals and market insights</p>
        </div>
        <div className="feature-card">
          <h3>Educational Content</h3>
          <p>Access exclusive educational resources and webinars</p>
        </div>
        <div className="feature-card">
          <h3>Community Events</h3>
          <p>Join regular community events and trading competitions</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Start Your Trading Journey?</h2>
        <p>Join thousands of successful traders in our community</p>
        <button className="cta-button">
          Join Community Now
          <HiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Community;
