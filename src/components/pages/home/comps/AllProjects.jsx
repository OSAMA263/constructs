import { useState } from "react";
import LayoutSection from "../../../shared/LayoutSection";
import tw from "tailwind-styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { allProjectsSwiper } from "../data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CurveImg from "./CurveImg";

export default function AllProjects() {
  return (
    <LayoutSection styles="">
      <div className="rounded-t-[60px] overflow-hidden">
        <div className="relative h-[55vh]">
          <ProjectsTitle>
            <h1 className="font-bold text-5xl">
              All
              <span className="!text-lime italic !font-normal"> Projects</span>
            </h1>
            <span>OUR LATEST</span>
            <p className="font-medium text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </ProjectsTitle>
          <img
            src="swiper1.jpg"
            className="w-full object-cover h-full"
            alt="zoomingin-tall-building"
          />
        </div>
        <SwiperFolders />
      </div>
    </LayoutSection>
  );
}

const SwiperFolders = () => {
  const swiperProps = {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    modules: [Navigation],
  };

  return (
    <div className="bg-lime">
      <Swiper {...swiperProps} className="!w-[60%] py-20 mx-auto !relative">
        {allProjectsSwiper.map(({ title, text, img }) => (
          <SwiperSlide key={title}>
            <Slide {...{ title, text, img }} />
          </SwiperSlide>
        ))}
        <SwiperControl className="right-0" aria-label="next image" id="next">
          <IoIosArrowForward />
        </SwiperControl>
        <SwiperControl aria-label="previous image" id="prev">
          <IoIosArrowBack />
        </SwiperControl>
      </Swiper>
    </div>
  );
};

const Slide = ({ title, text, img }) => {
  return (
    <div className="rounded-2xl overflow-hidden w-full h-full hover:[&_img]:scale-110">
      <div className="absolute z-10 bg-lime rounded-br-2xl rounded-tl-2xl">
        <div className="relative font-medium flex items-center gap-x-10 p-4 px-16">
          <h1 className="text-4xl">{title}</h1>
          <p>{text}</p>
          <CurveImg curveColor="lime" tr bl />
        </div>
      </div>
      <img src={img} className="h-full w-full" alt={img} />
    </div>
  );
};

const SwiperControl = tw.button`
absolute
top-1/2
z-10
text-white
bg-black
p-4
text-2xl
rounded-full
`;

const ProjectsTitle = tw.div`
bg-gradient-to-b 
to-[#000000da] 
from-transparent 
h-full 
w-full 
absolute 
flex 
flex-col 
gap-y-4
items-center
justify-end
text-white 
py-8
`;

// zoom on imge on scroll
