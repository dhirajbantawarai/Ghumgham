import React from "react";

import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import MainVid from "../assets/video/main.mp4";
import BannerImg from "../components/BannerImg/BannerImg.jsx";
import Poster from "../assets/cover-women.jpg";
import Blogs from "../components/Blogs/BlogsComp.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
// import BannerImg from "../assets/travel-cover2.jpg";
import Footer from "../components/Footer/Footer.jsx"
const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MainVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places />
        <BannerImg img={Poster} />
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial />

      </div>
    </>
  );
};

export default Home;
