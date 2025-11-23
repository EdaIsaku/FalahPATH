"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  LiaUsersSolid,
  LiaPlayCircleSolid,
  LiaGraduationCapSolid,
  LiaSmile,
  LiaStarSolid,
  LiaCalendarCheckSolid,
} from "react-icons/lia";
import { IconContext } from "react-icons";

export default function Statistics() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 6,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="bg-white max-w-full flex flex-col items-center">
      <div className="flex items-center gap-4">
        <span className="h-px w-100 bg-gradient-to-r from-transparent via-[#2f57ef] to-[#b966e7] opacity-60" />
        <span className="text-black text-xl font-medium flex items-center gap-1 py-4">
          Powerful Features for Every
          <span className="bg-gradient-to-r from-[#2f57ef] to-[#b966e7] bg-clip-text text-transparent">
            Learner
          </span>
        </span>
        <span className="h-px w-100 bg-gradient-to-l from-transparent via-[#2f57ef] to-[#b966e7] opacity-60" />
      </div>
      <div className="sliderContainer max-w-300 py-7">
        <Slider {...settings}>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaUsersSolid /> 1k+ Students Enrolled
              </IconContext.Provider>
            </h3>
          </div>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaPlayCircleSolid /> 120+ Video Lessons
              </IconContext.Provider>
            </h3>
          </div>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaGraduationCapSolid /> 50+ Expert Instructors
              </IconContext.Provider>
            </h3>
          </div>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaSmile /> 98% Satisfaction
              </IconContext.Provider>
            </h3>
          </div>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaStarSolid /> 4.8/5 Average Course Rating
              </IconContext.Provider>
            </h3>
          </div>
          <div>
            <h3 className="text-gray-400 flex flex-row justify-center items-center gap-3">
              <IconContext.Provider
                value={{ color: "#b966e7", className: "w-10 h-10" }}
              >
                <LiaCalendarCheckSolid /> 95% Course Completion Rate
              </IconContext.Provider>
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
