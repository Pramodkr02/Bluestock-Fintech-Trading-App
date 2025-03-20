import React from "react";
import "./Home.css";
import Logo from "../../assets/logo.webp";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { BsCartDashFill } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home ">
      <div className="home_container flex w-[100%] h-[100vh]">
        <div className="left_col w-[18%] bg-[#e9ecef] h-full flex flex-col ">
          <div className="app_logo w-full border-b border-[rgba(0,0,0,0.1)] px-8 py-5 cursor-pointer">
            <img src={Logo} alt="" />
          </div>
          <div className="menu_section px-8 py-8">
            <div className="mb-7">
              <h3 className="title text-[18px] font-bold mb-2">MENU</h3>
              <div className="item">
                <ul className="w-full  flex flex-col gap-2">
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <BiSolidDashboard className="text-[18px]" />
                        <span>Dashbord</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <BsCartDashFill className="text-[18px]" />
                        <span>Manage IPO</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <MdSubscriptions className="text-[18px]" />
                        <span>IPO Subscription</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <AiFillMessage className="text-[18px]" />
                        <span>API Allotment</span>
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="title text-[18px] font-bold mb-2">OTHERS</h3>
              <div className="item">
                <ul className="w-full  flex flex-col gap-2">
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <IoSettings className="text-[18px]" />
                        <span>Settings</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <SiStrapi className="text-[18px]" />
                        <span>API Manager</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <RiAccountPinCircleFill className="text-[18px]" />
                        <span>Accounts</span>
                      </Button>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/dashbord" className="flex">
                      <Button className="btn !gap-2">
                        <TbHelpOctagonFilled className="text-[18px]" />
                        <span>Help</span>
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right_col w-[88%] ">
          <div className="nav w-full border-b border-[rgba(0,0,0,0.1)] px-8 py-3">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
