import LayoutSection from "../../../shared/LayoutSection";
import tw from "tailwind-styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CurveImg from "./CurveImg";
import SectionTitle from "../../../shared/SectionTitle";
import { projects_data } from "../../projects/data";
import { Link } from "react-router-dom";
import SlideUpElement from "../../../shared/SlideUpElement";
import ZoomInImage from  "../../../shared/ZoomInImage"
export default function AllProjects() {
  return (
    <LayoutSection styles="">
      <div className="rounded-t-[60px] overflow-hidden">
        <div className="relative h-[55vh]">
          <ProjectsTitle>
            <SectionTitle
              h1="All"
              h2="Projects"
              par="OUR LATEST"
              styles="flex flex-col text-center border-transparent !mb-10 [&_h3]:text-lightGray [&_h1]:text-white [&_h2]:text-lime [&_p]:text-lightGray"
            />
          </ProjectsTitle>
          {/* zomom in img */}
          <ZoomInImage src="swiper1.jpg"/>
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
  const threeSlides = projects_data.filter((_, i) => i % 2 === 0 && _);

  return (
    <div className="bg-lime">
      <SlideUpElement offsetY="20%" offsetX="100%">
        <Swiper {...swiperProps} className="!w-[60%] py-20 mx-auto !relative">
          {threeSlides.map(({ title, text, img }) => (
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
      </SlideUpElement>
    </div>
  );
};

const Slide = ({ title, text, img }) => {
  return (
    <Link to="projects">
      <div className="rounded-2xl overflow-hidden w-full h-full hover:[&_img]:scale-110">
        <div className="absolute z-10 bg-lime rounded-br-2xl rounded-tl-2xl">
          <div className="relative flex items-center p-4 px-16 font-medium gap-x-10">
            <h1 className="text-4xl">{title}</h1>
            <p>{text}</p>
            <CurveImg curveColor="lime" tr bl />
          </div>
        </div>
        <img src={img} className="w-full h-full" alt={img} />
      </div>
    </Link>
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
to-[#000000e1] 
from-[#0000004f]
h-full 
w-full 
absolute 
flex 
flex-col 
gap-y-4
items-center
justify-end
text-white 
z-10
`;

// zoom on imge on scroll
