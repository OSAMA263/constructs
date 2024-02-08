import LayoutSection from "../../shared/LayoutSection";
import OurStory from "./comps/OurStory";
import TheTeam from "./comps/TheTeam";
import OurValues from "./comps/OurValues";
import LimeButtonArrow from "../../shared/LimeButtonArrow";
import { Link } from "react-scroll";
import GetStarted from "../../shared/GetStarted";
import PageWrapper from "../../PageWrapper";
import SlideUpElement from "../../shared/SlideUpElement";
import ZoomInImage from "../../shared/ZoomInImage";
import tw from "tailwind-styled-components";

export default function About() {
  return (
    <PageWrapper
      title="Constructs - About Us"
      description="our blogs Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
      href="https://osama263.github.io/constructs/about"
      bg="bg-gray-100"
    >
      <LayoutSection id="about us" styles="!-44">
        <SlideUpElement offsetY="40%">
          <Hero />
          {/* zoom in image */}
          <div className="pt-10">
            <div className="rounded-2xl overflow-hidden">
              <ZoomInImage src="swiper1.webp" />
            </div>
          </div>
        </SlideUpElement>
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
      <div className="text-center space-y-2 font-bold tracking-wider xl:text-7xl sm:text-5xl text-4xl">
        <h1>
          GET TO<span className="italic font-extralight"> KNOW</span>
        </h1>
        <div className="flex italic font-extralight gap-x-1">
          <h2>ABOUT</h2>
          {/* 3 AVATAR IMAGES */}
          <ThreeAvatars>
            <img
              src="team/Jane Doe.webp"
              alt="Jane Doe"
              className="xl:w-16 w-10 "
            />
            <img
              src="team/John Smith.webp"
              alt="John Smith"
              className="xl:w-16 w-10 -translate-x-[30%]"
            />
            <img
              src="team/Steve Davis.webp"
              alt="Steve Davis"
              className="xl:w-16 w-10 absolute left-1/2 translate-x-[30%]"
            />
          </ThreeAvatars>
          <span className="font-bold">US</span>
        </div>
      </div>
      <p className="tracking-widest text-darkGray">MEET OUR TEAM</p>
      <p className="max-w-[50%] text-center lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis.
      </p>
      <LimeButtonArrow  text="learn more">
        <Link smooth to="our story"></Link>
      </LimeButtonArrow>
    </div>
  );
};
const ThreeAvatars = tw.div`
relative 
[&_img]:rounded-full 
[&_img]:xl:border-4 
[&_img]:border 
[&_img]:border-lime
flex 
items-center 
justify-center
px-4
`;
