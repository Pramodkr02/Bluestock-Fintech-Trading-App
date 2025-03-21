import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import ForgotPassword from "./pages/ForgotPassword/index";
import ErrorPage from "./pages/ErrorPage/index";
import ContactUs from "./pages/ContactUs/index";
import Community from "./pages/Community/index";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/Blog";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <Header />
      </div>
      <main className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
