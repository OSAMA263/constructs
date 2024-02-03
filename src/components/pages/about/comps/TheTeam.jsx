import LayoutSection from "../../../shared/LayoutSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import LimeButtonArrow from "../../../shared/LimeButtonArrow";
import { THE_TEAM_DATA } from "../../team/data";

export default function TheTeam() {
  return (
    <LayoutSection styles="w-[60%] py-28">
      <SectionTitle
        h1="the"
        h2="team"
        par="get to know us"
        styles="flex-between border-black [&_h3]:text-gray-500"
      />
      <TeamSwiper />

      <div className="flex justify-center mt-10">
        <LimeButtonArrow text="view all">
          <Link to="team"></Link>
        </LimeButtonArrow>
      </div>
    </LayoutSection>
  );
}

const TeamSwiper = () => {
  const swiperProps = {
    spaceBetween: 60,
    slidesPerView: 2,
    pagination: {
      el: "#custom-pagination",
      clickable: true,
      renderBullet: (index, className) =>
        `<button class="${className} p-2 bg-lightGray"></button>`,
    },
    modules: [Pagination],
  };
  return (
    <Swiper {...swiperProps}>
      {THE_TEAM_DATA.map(({ img, name, role, des }) => (
        <SwiperSlide key={name}>
          <Link className="flex overflow-hidden rounded-2xl">
            <img src={img} className="w-56" alt="" />
            <div className="flex flex-col justify-center p-8 font-medium text-center bg-darkGray gap-y-4 text-lightGray">
              <div className="uppercase">
                <h1>{name}</h1>
                <span className="text-lime">{role}</span>
              </div>
              <p>{des}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div
        className="absolute bottom-0 z-10 flex -translate-x-1/2 left-1/2 gap-x-4"
        id="custom-pagination"
      ></div>
    </Swiper>
  );
};
