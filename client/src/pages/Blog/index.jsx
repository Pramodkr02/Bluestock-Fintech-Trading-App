import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight, HiClock } from "react-icons/hi";
import "./styles.css";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts = [
    {
      id: 1,
      title: "Top Reasons for Life Insurance Claim Rejection",
      date: "06 January 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=500&auto=format&fit=crop",
      category: "Insurance",
    },
    {
      id: 2,
      title: "Best PSU Stocks in India",
      date: "25 December 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop",
      category: "Stocks",
    },
    {
      id: 3,
      title: "Banking & Financial Services Fund",
      date: "15 December 2023",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=500&auto=format&fit=crop",
      category: "Banking",
    },
    {
      id: 4,
      title: "IRCTC India IPO – Everything You Must Know",
      date: "10 December 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=500&auto=format&fit=crop",
      category: "IPO",
    },
    {
      id: 5,
      title: "Types of Banking Frauds - How to Prevent Them",
      date: "05 December 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=500&auto=format&fit=crop",
      category: "Security",
    },
    {
      id: 6,
      title: "Popular Finance Podcasts in India",
      date: "30 November 2023",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=500&auto=format&fit=crop",
      category: "Education",
    },
    {
      id: 7,
      title: "GandhiDar Oil Refinary IPO - Everything You Must Know",
      date: "25 November 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1582486225644-6d359bab0349?q=80&w=500&auto=format&fit=crop",
      category: "IPO",
    },
    {
      id: 8,
      title: "IREDA IPO - Everything You Must Know",
      date: "20 November 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e694?q=80&w=500&auto=format&fit=crop",
      category: "IPO",
    },
    {
      id: 9,
      title: "Tata Technologies IPO - Everything You Must Know",
      date: "15 November 2023",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=500&auto=format&fit=crop",
      category: "IPO",
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Blog</span>
      </div>

      {/* Title */}
      <h1 className="blog-title">BLUESTOCK BLOG</h1>

      {/* Blog Grid */}
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-category">{post.category}</div>
            </div>
            <div className="blog-content">
              <h2 className="blog-card-title">{post.title}</h2>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <div className="blog-read-time">
                  <HiClock className="clock-icon" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <HiArrowLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`pagination-number ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
