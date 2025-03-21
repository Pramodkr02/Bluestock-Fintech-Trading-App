import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import Logo from "../../assets/logo.webp";
import startupIndia from "../../assets/startupIndia.png";

const Footer = () => {
  const footerLinks = {
    Resources: [
      { name: "Trading View", path: "/trading-view" },
      { name: "NSE Holidays", path: "/nse-holidays" },
      { name: "e-Voting CDSL", path: "/e-voting-cdsl" },
      { name: "e-Voting NSDL", path: "/e-voting-nsdl" },
      { name: "Market Timings", path: "/market-timings" },
    ],
    Company: [
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" },
      { name: "About US", path: "/about" },
      { name: "Community", path: "/community" },
      { name: "Blogs", path: "/blogs" },
    ],
    Offerings: [
      { name: "Compare Broker", path: "/compare-broker" },
      { name: "Fin Calculators", path: "/calculators" },
      { name: "IPO", path: "/ipo" },
      { name: "All Brokers", path: "/brokers" },
      { name: "Products", path: "/products" },
    ],
    Links: [
      { name: "Shark Investor", path: "/shark-investor" },
      { name: "Mutual Funds", path: "/mutual-funds" },
      { name: "Sitemap", path: "/sitemap" },
      { name: "Indian Indices", path: "/indices" },
      { name: "Bug Bounty Program", path: "/bug-bounty" },
    ],
    Policy: [
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Refund Policy", path: "/refund" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Trust & Security", path: "/security" },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, link: "https://twitter.com/bluestock" },
    { icon: FaFacebook, link: "https://facebook.com/bluestock" },
    { icon: FaYoutube, link: "https://youtube.com/bluestock" },
    { icon: FaLinkedin, link: "https://linkedin.com/company/bluestock" },
    { icon: FaInstagram, link: "https://instagram.com/bluestock" },
    { icon: FaTelegram, link: "https://t.me/bluestock" },
  ];

  return (
    <footer className="bg-white pt-8 md:pt-16 pb-8 min-w-[325px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-600 font-medium mb-3 text-sm md:text-base">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-500 hover:text-gray-700 text-xs md:text-sm block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info and Social Links */}
        <div className="border-t flex flex-col border-gray-200 pt-8">
          <div className="flex w-full">
            <div className="flex flex-col gap-5  items-start mb-8 space-y-6 md:space-y-0 w-[30%]">
              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  );
                })}
              </div>
              <div className="">
                <Link to="/" className="flex items-center mb-4">
                  <img
                    src={Logo}
                    alt="Bluestock"
                    className="h-6 md:h-8 w-[180px]"
                  />
                </Link>
                <div className="text-xs mt-8 md:text-sm text-gray-500">
                  <p>Bluestock Fintech</p>
                  <p>Pune, Maharashtra</p>
                  <p className="mt-2">MSME Registration No:</p>
                  <p>UDYAM-MH-01-V0138001</p>
                </div>
              </div>
              <div className="">
                <img src={startupIndia} alt="" />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs md:text-sm text-gray-500 space-y-4 mb-8 w-[70%]">
              <p className="leading-relaxed">
                Investment in securities markets are subject to market risks,
                read all the related documents carefully before investing as
                prescribed by SEBI. Issued in the interest of the Investors.
              </p>
              <p className="leading-relaxed">
                The users can write to{" "}
                <a
                  href="mailto:hello@bluestock.in"
                  className="text-blue-600 hover:underline"
                >
                  hello@bluestock.in
                </a>{" "}
                for any app, website related queries. Also you can send IT /
                Tech related feedback to{" "}
                <a
                  href="mailto:cto@bluestock.in"
                  className="text-blue-600 hover:underline"
                >
                  cto@bluestock.in
                </a>
              </p>
              <p className="leading-relaxed">
                Disclaimer: We are not a SEBI registered research analyst
                company. We do not provide any kind of stock recommendations,
                buy/ sell stock tips, or investment and trading advice. All the
                stock scripts shown in the Bluestock app, website, all social
                media handles are for educational purposes only.
              </p>
              <p className="leading-relaxed">
                Before making any investment in the financial market, it is
                advisable to consult with your financial advisor. Remember that
                stock markets are subject to market risks.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 pt-4 border-t border-gray-200 space-y-2 md:space-y-0">
            <p>Bluestock Fintech All Rights Reserved.</p>
            <p className="flex items-center">
              Made with <span className="text-red-500 mx-1">❤</span> in Pune,
              Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
