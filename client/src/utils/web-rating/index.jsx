import React from "react";
import { FaStar } from "react-icons/fa";
import AppleLogo from "../../assets/appleLogo.png";
import playStoe from "../../assets/PlayStorLogo.png";

const WebRating = () => {
  const users = [
    "/avatars/user1.jpg",
    "/avatars/user2.jpg",
    "/avatars/user3.jpg",
    "/avatars/user4.jpg",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-4 md:py-6">
      {/* App Banner */}
      <div className="w-full bg-[#F3F4FF]  rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-semibold text-lg md:text-xl">
            Bluestock App 2.0
          </span>
          <span className="text-gray-800 font-medium text-lg md:text-xl">
            is Live Now!
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-gray-600 text-sm font-bold md:text-base">
            Download Our App
          </span>
          <a
            href="https://play.google.com/store/apps/details?id=com.bluestock"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src={playStoe}
              alt="Get it on Google Play"
              className="h-8 md:h-10"
            />
          </a>
          <a
            href="https://apps.apple.com/app/bluestock"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src={AppleLogo}
              alt="Download on the App Store"
              className="h-8 md:h-10"
            />
          </a>
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4">
        {/* User Avatars */}
        <div className="flex -space-x-3">
          {users.map((avatar, index) => (
            <div
              key={index}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden"
            >
              <img
                src={avatar}
                alt={`User ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://ui-avatars.com/api/?name=User&background=random";
                }}
              />
            </div>
          ))}
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="text-yellow-400 w-4 h-4 md:w-5 md:h-5"
            />
          ))}
        </div>

        {/* Rating Text */}
        <span className="text-gray-600 text-sm md:text-base">
          (4.5 by 100+ users)
        </span>
      </div>
    </div>
  );
};

export default WebRating;
