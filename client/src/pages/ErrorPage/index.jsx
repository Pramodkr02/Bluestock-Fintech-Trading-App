import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center px-4 md:px-8 mt-12 md:mt-20">
        {/* Background Circles */}
        <div className="error-circle w-48 md:w-64 h-48 md:h-64 left-0 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="error-circle w-48 md:w-64 h-48 md:h-64 right-0 bottom-0 translate-x-1/2 translate-y-1/2"></div>

        {/* Error Content */}
        <div className="relative z-10 text-center w-full max-w-2xl mx-auto">
          {/* OOPS Text */}
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-6 md:mb-8 animate-float">
            OOPS...
          </div>

          {/* JSON Animation Box with Logo */}
          <div className="bg-[#F8F9FE] rounded-lg p-6 sm:p-8 md:p-12 mb-6 md:mb-8 w-full max-w-[280px] sm:max-w-md mx-auto transform transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <img
                src={logo}
                alt="Bluestock Logo"
                className="h-12 sm:h-16 md:h-20 w-auto mb-4 animate-pulse-soft"
              />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3 md:space-y-4 animate-pulse-soft">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Something went wrong.
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Sorry, we can't find the page you're looking for.
            </p>
            <p className="text-sm sm:text-base text-gray-500 font-medium">
              Error Code 404
            </p>
          </div>

          {/* Go Back Button */}
          <Link
            to="/"
            className="inline-block mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Go Back
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
