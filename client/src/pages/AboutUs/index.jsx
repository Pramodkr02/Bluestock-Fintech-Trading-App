import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiUsers, HiUserGroup, HiStar } from "react-icons/hi";
import "./styles.css";
import FQ from "../../components/FQ/index";

const StatisticCard = ({ number, label }) => (
  <div className="statistic-card">
    <h3 className="stat-number">{number}</h3>
    <p className="stat-label">{label}</p>
  </div>
);

const NewsCard = ({ logo, title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="news-card"
  >
    <img src={logo} alt={title} className="news-logo" />
    <p className="news-description">{description}</p>
  </a>
);

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>About Us</span>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">
          Bluestock is mobile app for stock market learning, analytics & club
        </h1>
        <p className="main-description">
          We are passionate about helping you succeed in the stock market by
          providing cutting-edge tools and a supportive community of traders.
        </p>
        <p className="sub-description">
          Join us on this journey, and let's make your stock trading experience
          better.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <StatisticCard number="5 Thousand" label="Customers" />
        <StatisticCard number="20+" label="Team Members" />
        <StatisticCard number="4.9" label="Rating" />
      </section>

      {/* Recent News Section */}
      <section className="news-section">
        <div className="section-header">
          <h2 className="section-title">TRADERS TALK</h2>
          <h3 className="section-subtitle">Recent News</h3>
        </div>

        <div className="news-grid">
          <NewsCard
            logo="/images/business-standard.png"
            title="Business Standard"
            description="Rs 25 trillion & rising: AUM of active equity mutual funds surges"
            link="#"
          />
          <NewsCard
            logo="/images/medium.png"
            title="Medium"
            description="Bluestock is a mobile app for stock market learning, analytics, and rich, supportive community of traders."
            link="#"
          />
          <NewsCard
            logo="/images/business-world.png"
            title="Business World"
            description="Mutual Funds Experience Fourfold Surge in NFO Collections, Reaching Rs 22,000 Cr in Q3"
            link="#"
          />
        </div>

        <div className="media-link">
          <span>Media & Press Releases</span>
          <HiArrowRight className="arrow-icon" />
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <h2 className="join-title">Want to join us ?</h2>
        <p className="join-description">
          We're taking complicated stuff and making it super simple. Our teams
          are full of smart and savvy folks working on challenging tasks.
        </p>
        <p className="join-contact">
          And we're always looking for customer-obsessed people. Think you're
          customer-focused enough? Write to us at hello@bluestock.in
        </p>
        <button className="apply-button">
          APPLY NOW
          <HiArrowRight className="button-icon" />
        </button>
      </section>
      <FQ />
    </div>
  );
};

export default AboutUs;
