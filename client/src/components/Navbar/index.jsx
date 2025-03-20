import React from "react";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
          <div
            className="nav_profile flex items-center gap-6 justify-end cursor-pointer"
            onClick={handleClick}
          >
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
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <div className="nav_notification text-[22px]">
            <Link to="notification">
              <Tooltip title="Notification" placement="bottom">
                <Button className="">
                  <IoNotificationsSharp className="text-[20px] text-gray-700" />
                </Button>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
