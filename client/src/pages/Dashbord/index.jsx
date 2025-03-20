import React from "react";
import "./Dashbord.css";
import { FaArrowUpLong } from "react-icons/fa6";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import NSE_Logo from "../../assets/NSE_Logo.webp";

const Dashbord = () => {
  return (
    <div className="dashbord">
      <div className="container flex flex-col  px-6 py-5 w-full">
        <div className="text-[22px] mb-7 font-semibold">Dashbord</div>
        <div className="flex w-full">
          <div className="dash_col1 w-[33%] border-r-2 border-[rgba(0,0,0,0.3)] p-3">
            <h3 className="mb-2 font-semibold">IPO Dashbord India</h3>
            <div className="flex w-full">
              <span className="flex items-center mr-1 text-green-500 text-[14px]">
                <FaArrowUpLong className="text-[13px]" /> 20{" "}
              </span>
              <p className="text-[14px]">IPO in Gain</p>
            </div>
            <div className="circle_wrapper relative w-full h-[400px]">
              <div className="circle_1 flex-col text-white">
                <span className="text-[16px]">9</span>
                <p className="text-[12px]">IPO in Loss</p>
              </div>
              <div className="circle_2 flex-col text-white">
                <span className="text-[22px]">30</span>
                <p className="text-[19px]">Total IPO</p>
              </div>
              <div className="circle_3 flex-col text-white">
                <span className="text-[16px]">20</span>
                <p className="text-[12px]">IPO in Gain</p>
              </div>
            </div>
          </div>
          <div className="dash_col2 w-[34%] border-r-2 border-[rgba(0,0,0,0.3)] p-3">
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <p>some links of excahnge bank</p>
            <div className="links_wrapper mt-5">
              <ul>
                <li className="w-full">
                  <Link>
                    <Button className="link btn1 !pr-3">
                      <div className=" flex items-center">
                        <span className="h-[40px] w-[40px] rounded-full border border-[rgba(0,0,0,0.2)] mr-5 overflow-hidden p-1">
                          <img
                            src={NSE_Logo}
                            alt=""
                            className="object-contain"
                          />
                        </span>
                        <span className="text-[18px] capitalize">
                          NSE India
                        </span>
                      </div>
                      <div className="text-right">Visit Now</div>
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link>
                    <Button className="link btn1 !pr-3">
                      <div className=" flex items-center">
                        <span className="h-[40px] w-[40px] rounded-full border border-[rgba(0,0,0,0.2)] mr-5 overflow-hidden p-1">
                          <img
                            src={NSE_Logo}
                            alt=""
                            className="object-contain"
                          />
                        </span>
                        <span className="text-[18px] capitalize">
                          NSE India
                        </span>
                      </div>
                      <div className="text-right">Visit Now</div>
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link>
                    <Button className="link btn1 !pr-3">
                      <div className=" flex items-center">
                        <span className="h-[40px] w-[40px] rounded-full border border-[rgba(0,0,0,0.2)] mr-5 overflow-hidden p-1">
                          <img
                            src={NSE_Logo}
                            alt=""
                            className="object-contain"
                          />
                        </span>
                        <span className="text-[18px] capitalize">
                          NSE India
                        </span>
                      </div>
                      <div className="text-right">Visit Now</div>
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link>
                    <Button className="link btn1 !pr-3">
                      <div className=" flex items-center">
                        <span className="h-[40px] w-[40px] rounded-full border border-[rgba(0,0,0,0.2)] mr-5 overflow-hidden p-1">
                          <img
                            src={NSE_Logo}
                            alt=""
                            className="object-contain"
                          />
                        </span>
                        <span className="text-[18px] capitalize">
                          NSE India
                        </span>
                      </div>
                      <div className="text-right">Visit Now</div>
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link>
                    <Button className="link btn1 !pr-3">
                      <div className=" flex items-center">
                        <span className="h-[40px] w-[40px] rounded-full border border-[rgba(0,0,0,0.2)] mr-5 overflow-hidden p-1">
                          <img
                            src={NSE_Logo}
                            alt=""
                            className="object-contain"
                          />
                        </span>
                        <span className="text-[18px] capitalize">
                          NSE India
                        </span>
                      </div>
                      <div className="text-right">Visit Now</div>
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dash_col3 w-[33%] p-3">
            <div className="flex justify-between items-center">
              <span className="mb-2 font-semibold">Main Board IPO</span>
              <span>
                <Link to="view-report">
                  <Button className="!capitalize !text-white !px-4 !bg-blue-700">
                    View Report
                  </Button>
                </Link>
              </span>
            </div>
            <h3>From 01 Jan 2025</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
