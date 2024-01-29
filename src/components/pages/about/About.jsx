import LayoutSection from "../../shared/LayoutSection";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import OurStory from "./comps/OurStory";
import TheTeam from "./comps/TheTeam";

export default function About() {
  return (
    <main className="bg-gray-100">
      <LayoutSection styles="py-44 w-[60%]">
        <Hero />
        {/* zoom in image */}
        <div className="py-10">
          <img
            src="swiper1.jpg"
            alt=""
            className="rounded-2xl max-h-[600px] w-full"
          />
        </div>
      </LayoutSection>
      {/*  */}
      <OurStory/>
      {/*  */}
      <TheTeam/>
    </main>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      {/* HERO LARGE TEXT */}
      <div className="font-bold text-7xl tracking-wider space-y-2">
        <h1>
          GET TO<span className="font-extralight italic"> KNOW</span>
        </h1>
        <div className="font-extralight italic flex gap-x-1">
          <h2>ABOUT</h2>
          {/* 3 AVATAR IMAGES */}
          <div className="flex items-center [&_img]:rounded-full [&_img]:absolute w-full relative [&_img]:border-4 [&_img]:border-lime">
            <img src="avatar1.jpg" alt="" className="w-16 " />
            <img src="avatar2.jpg" alt="" className="w-16 translate-x-12" />
            <img src="avatar3.jpg" alt="" className="w-16 translate-x-24" />
          </div>
          <span className="font-bold">US</span>
        </div>
      </div>
      <p className="tracking-widest text-darkGray">MEET OUR TEAM</p>
      <p className="max-w-[50%] text-center text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis.
      </p>
      {/* LIME BG BUTTON */}
      <Link className="p-4 font-medium rounded-xl bg-lime [&_svg]:-rotate-45 [&:hover_svg]:rotate-0">
        <span className="flex items-center gap-x-2">
          LEARN MORE
          <IoArrowForward />
        </span>
      </Link>
    </div>
  );
};
