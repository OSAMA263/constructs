import { theTeam } from "../data";
import LayoutSection from "../../../shared/LayoutSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css/pagination"
export default function TheTeam() {
  return (
    <LayoutSection styles="w-[60%] py-28">
      <Header />
      <TeamSwiper />
    </LayoutSection>
  );
}
const Header = () => {
  return (
    <div className="flex-between border-b border-black py-4 mb-20">
      <div className="text-6xl">
        <span className="font-bold">The</span>
        <span className="italic font-extralight"> Team</span>
      </div>
      <div className="space-y-4 text-darkGray font-medium">
        <p className="tracking-widest uppercase">get to know us</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

const TeamSwiper = () => {
  const swiperProps = {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    pagination: { clickable: true },
    modules: [Pagination,FreeMode],
  };
  return (
    <Swiper {...swiperProps}>
      {theTeam.map(({ img, name, role, des }) => (
        <SwiperSlide key={name}>
          <Link className="flex rounded-2xl overflow-hidden">
            <img src={img} className="w-56" alt="" />
            <div className="bg-darkGray p-8 flex flex-col gap-y-4 justify-center text-center font-medium text-lightGray">
              <div className="uppercase">
                <h1>{name}</h1>
                <span className="text-lime">{role}</span>
              </div>
              <p>{des}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
