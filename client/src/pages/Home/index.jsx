import React from "react";
import "./Home.css";
import WebRating from "../../utils/web-rating/index";
import CardSlider from "../../components/cardSlider/index";
import HighLight from "../../components/HighLight";
import Home1 from "../../utils/home1";
import MobileCard from "../../components/mobileCard/index";

const Home = () => {
  return (
    <>
      <Home1 />
      <HighLight />
      <MobileCard />
      <WebRating />
      <CardSlider />
    </>
  );
};

export default Home;
