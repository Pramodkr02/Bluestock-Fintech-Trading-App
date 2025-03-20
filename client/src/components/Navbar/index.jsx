import React from "react";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full flex">
      <div className="left_nav w-[56%] flex items-center justify-center ">
        <div className="search_bar w-[600px] relative">
          <input
            type="text"
            className="w-full border-none px-4 py-2 rounded bg-[#e9ecef] pr-12"
          />
          <div className="serach_icon absolute top-[10px] right-[10px] text-[21px] font-bold z-10 cursor-pointer">
            <IoSearchOutline />
          </div>
        </div>
      </div>
      <div className="right_nav w-[44%] flex gap-9 items-center justify-end">
        <div className="nav_profile flex items-center gap-6 justify-end cursor-pointer">
          <div className="flex items-center gap-3">
            <span className="profile_icon w-[35px] h-[35px] min-w-[35px] min-h-[35px] border border-[rgba(0,0,0,0.7)] rounded-full flex !gap-2 items-center justify-center text-white font-bold">
              <img src="" alt="" />
            </span>

            <span>
              Hii, <span>Pramod Kumar</span>
            </span>
          </div>
          <div className="">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="nav_notification text-[22px]">
          <Link to="notification">
            <IoNotificationsSharp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
