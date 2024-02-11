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
import ZoomInImage from "../../../shared/ZoomInImage";

export default function AllProjects() {
  return (
    <section id="projects">
      <div className="rounded-t-[60px] overflow-hidden">
        <div className="relative h-[55vh]">
          <ProjectsTitle>
            <SectionTitle
              h1="All"
              h2="Projects"
              par="OUR LATEST"
              styles="sm:flex-col sm:text-center border-transparent !mb-1 [&_h3]:text-lightGray [&_h1]:text-white [&_h2]:text-lime [&_p]:text-lightGray"
            />
          </ProjectsTitle>
          {/* zomom in img */}
          <ZoomInImage src="swiper1.webp" />
        </div>
        <SwiperFolders />
      </div>
    </section>
  );
}

const SwiperFolders = () => {
  const swiperProps = {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    allowTouchMove: true,
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    modules: [Navigation],
    breakpoints: {
      840: { slidesPerView: 2, allowTouchMove: false },
    },
  };
  const threeSlides = projects_data.filter((_, i) => i % 2 === 0 && _);

  return (
    <div className="bg-lime">
      <LayoutSection id="swiper-images">
        <SlideUpElement offsetY="20%" offsetX="100%">
          <Swiper {...swiperProps}>
            {threeSlides.map(({ title, text, img }) => (
              <SwiperSlide key={title}>
                <Slide {...{ title, text, img }} />
              </SwiperSlide>
            ))}
            <SwiperControl
              className="right-0"
              aria-label="next image"
              id="next"
            >
              <IoIosArrowForward />
            </SwiperControl>
            <SwiperControl aria-label="previous image" id="prev">
              <IoIosArrowBack />
            </SwiperControl>
          </Swiper>
        </SlideUpElement>
      </LayoutSection>
    </div>
  );
};

const Slide = ({ title, text, img }) => {
  return (
    <Link to="projects">
      <div className="rounded-2xl overflow-hidden w-full h-full hover:[&_img]:scale-110">
        {/* PROJECTS TEXT */}
        <ProjectTextWrapper>
          <div className="col-span-2 xl:pe-6 max-sm:py-1 py-4 rounded-br-xl relative bg-lime grid items-end grid-cols-2 ">
            <h1 className="lg:text-4xl sm:text-3xl text-lg">{title}</h1>
            <p className="max-sm:text-xs">{text}</p>
            <CurveImg curveColor="lime" tr bl />
          </div>
          <div></div>
        </ProjectTextWrapper>
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
const ProjectTextWrapper = tw.div`
absolute
z-10
grid 
grid-cols-3
w-full 
font-medium
`;
