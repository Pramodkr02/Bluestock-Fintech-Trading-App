import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiChat, HiArrowRight } from "react-icons/hi";
import "./styles.css";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 text-gray-500">
          <Link to="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span>•</span>
          <span>Contact us</span>
        </nav>

        {/* Main Content */}
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              How Can We Help You ?
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="contact-card group">
              <div className="card-content">
                <div className="icon-wrapper">
                  <HiMail className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="card-title">Email us</h3>
                <p className="card-description">
                  One of our agents will respond at the earliest
                </p>
                <a href="mailto:hello@bluestock.in" className="contact-link">
                  <span>hello@bluestock.in</span>
                  <HiArrowRight className="arrow-icon" />
                </a>
              </div>
              <div className="card-bg"></div>
            </div>

            {/* Chat Card */}
            <div className="contact-card group">
              <div className="card-content">
                <div className="icon-wrapper">
                  <HiChat className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="card-title">Chat us</h3>
                <p className="card-description">
                  Available from 8:00AM to 5:00PM
                </p>
                <button className="contact-link">
                  <span>Open Chat</span>
                  <HiArrowRight className="arrow-icon" />
                </button>
              </div>
              <div className="card-bg"></div>
            </div>
          </div>

          {/* Additional Support Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need More Support?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions
              or concerns. We're committed to providing you with the best
              possible service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
