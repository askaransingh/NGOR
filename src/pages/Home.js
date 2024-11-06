import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";
import IntroHeading from "../components/IntroHeading";
import Causes from "../components/Cause";
import Services from "../components/Services";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("fdfddf");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setdata] = useState([]);
  const [team, setteam] = useState([]);
  const [help, sethelp] = useState([]);
  const [reviews, setreviews] = useState([]);
 

  const navigate = useNavigate();
  return (
    <div>
      <section class="banner-1">
        <div class="diagonal-div"></div>
        <div class="diagonal-div-2"></div>

        <div class="banner-text">
          <p class="banner-heading-1">Empowering Communities, </p>
          <p class="banner-heading-2">Inspiring Change</p>
          <p class="banner-heading-3">
            Access to clean and safe drinking water is a fundamental human
            right, yet many villages in Asia still struggle with waterborne
            diseases and the burden of fetching water from distant, contaminated
            sources.
          </p>
          <button
            onClick={() => {
              navigate("Login");
            }}
          >
          Join us!
          </button>
        </div>
      </section>
  
      <IntroHeading/>
     
      <section class="feature-section">
  
      </section>

  
      <section class="volunteer" style={{marginTop:"10rem"}}>
        <p class="title">
        <span style={{color: "rgb(4, 4, 54)"}}>OUR</span>   <span style={{ color: "rgb(241, 126, 38)" }}>SERVICES</span>
        </p>
<Services/>
    
      </section>
    </div>
  );
};

export default Home;
