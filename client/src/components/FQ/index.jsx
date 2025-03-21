import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import "./styles.css";

const FQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Bluestock?",
      answer:
        "Bluestock is a cutting-edge trading platform that combines advanced analytics, real-time market data, and user-friendly interfaces to help traders make informed decisions. Our platform offers comprehensive tools for both beginners and experienced traders.",
    },
    {
      question: "What platforms does Bluestock support?",
      answer:
        "Bluestock is available on multiple platforms including iOS, Android, and Web browsers. Our platform is optimized for seamless performance across all devices, ensuring you can trade anywhere, anytime.",
    },
    {
      question: "Is there educational content on the app?",
      answer:
        "Yes! Bluestock provides extensive educational resources including video tutorials, trading guides, market analysis, and interactive learning modules. We believe in empowering our users with knowledge to make better trading decisions.",
    },
    {
      question: "Is Bluestock free to use?",
      answer:
        "Bluestock offers both free and premium features. Basic trading tools and market analysis are available for free, while advanced features and real-time data are part of our premium subscription plans.",
    },
    {
      question: "How can I get technical support for the app?",
      answer:
        "Our dedicated support team is available 24/7 through multiple channels. You can reach us via in-app chat, email support, or phone. We also have a comprehensive help center with troubleshooting guides and FAQs.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <HiChevronDown
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQ;
