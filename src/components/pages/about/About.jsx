import LayoutSection from "../../shared/LayoutSection";
import OurStory from "./comps/OurStory";
import TheTeam from "./comps/TheTeam";
import OurValues from "./comps/OurValues";
import LimeButtonArrow from "../../shared/LimeButtonArrow";
import { Link } from "react-scroll";
import GetStarted from "../../shared/GetStarted";
import PageWrapper from "../../PageWrapper";

export default function About() {
  return (
    <PageWrapper bg="bg-gray-100">
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
      <OurStory />
      <TheTeam />
      <OurValues />
      <GetStarted overlayBgc="bg-lime" />
    </PageWrapper>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      {/* HERO LARGE TEXT */}
      <div className="space-y-2 font-bold tracking-wider text-7xl">
        <h1>
          GET TO<span className="italic font-extralight"> KNOW</span>
        </h1>
        <div className="flex italic font-extralight gap-x-1">
          <h2>ABOUT</h2>
          {/* 3 AVATAR IMAGES */}
          <div className="flex items-center [&_img]:rounded-full [&_img]:absolute w-full relative [&_img]:border-4 [&_img]:border-lime">
            <img src="team/Jane Doe.jpg" alt="Jane Doe" className="w-16 " />
            <img
              src="team/John Smith.jpg"
              alt="John Smith"
              className="w-16 translate-x-12"
            />
            <img
              src="team/Steve Davis.jpg"
              alt="Steve Davis"
              className="w-16 translate-x-24"
            />
          </div>
          <span className="font-bold">US</span>
        </div>
      </div>
      <p className="tracking-widest text-darkGray">MEET OUR TEAM</p>
      <p className="max-w-[50%] text-center text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis.
      </p>
      <LimeButtonArrow text="learn more">
        <Link smooth to="story"></Link>
      </LimeButtonArrow>
    </div>
  );
};
