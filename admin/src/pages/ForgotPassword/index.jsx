import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Add your password reset logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[400px] md:max-w-[440px] bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
        {/* Logo Section */}
        <div className="text-center mb-6 sm:mb-8">
          <img
            src={logo}
            alt="Bluestock"
            className="mx-auto h-8 xs:h-10 sm:h-12 w-auto transition-all duration-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
              const textLogo = document.createElement("h2");
              textLogo.className =
                "text-2xl xs:text-3xl sm:text-4xl font-bold text-indigo-600 transition-all duration-200";
              textLogo.textContent = "BLUESTOCK";
              e.target.parentNode.appendChild(textLogo);
            }}
          />
        </div>

        {/* Header Section */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <h2 className="text-xl xs:text-2xl font-semibold text-gray-900">
            Forgot Password?
          </h2>
          <p className="text-xs xs:text-sm text-gray-600 px-4">
            Enter your email address to get the password reset link.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 xs:py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all duration-200"
              placeholder="hello@bluestock.in"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 xs:py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
                ${
                  isLoading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                } transition-all duration-200`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Password Reset"
              )}
            </button>
          </div>
        </form>

        {/* Back to Login Link */}
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-xs xs:text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
