import LayoutSection from "../../../shared/LayoutSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import LimeButtonArrow from "../../../shared/LimeButtonArrow";
import { THE_TEAM_DATA } from "../../team/data";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function TheTeam() {
  return (
    <LayoutSection styles="2xl:w-[65%] xl:w-[80%]" id="our fokin team">
      <SectionTitle
        h1="the"
        h2="team"
        par="get to know us"
        styles="flex-between border-black [&_h3]:text-gray-500"
      />
      <TeamSwiper />

      <div className="flex justify-center mt-10">
        <LimeButtonArrow text="view all">
          <NavLink to="/team"></NavLink>
        </LimeButtonArrow>
      </div>
    </LayoutSection>
  );
}

const TeamSwiper = () => {
  const swiperProps = {
    spaceBetween: 60,
    slidesPerView: 1,
    pagination: {
      el: "#custom-pagination",
      clickable: true,
      renderBullet: (i, className) =>
        `<button class="${className} p-2 bg-lightGray"></button>`,
    },
    modules: [Pagination],
    breakpoints: {
      1224: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <SlideUpElement offsetY="20%" offsetX="100%">
      <Swiper {...swiperProps}>
        {THE_TEAM_DATA.map(({ img, name, role, des }) => (
          <SwiperSlide key={name}>
            <div className="flex overflow-hidden cursor-pointer rounded-2xl">
              <img src={img} className="w-56 max-[440px]:hidden" alt={name} />
              <div className="flex w-full flex-col justify-center p-8 font-medium text-center bg-darkGray gap-y-4 text-lightGray">
                <div className="uppercase">
                  <h1>{name}</h1>
                  <span className="text-lime">{role}</span>
                </div>
                <p>{des}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="absolute bottom-0 z-10 flex -translate-x-1/2 left-1/2 gap-x-4"
          id="custom-pagination"
        ></div>
      </Swiper>
    </SlideUpElement>
  );
};
