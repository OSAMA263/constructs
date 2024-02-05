import ArrowButton from "./ArrowButton";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import tw from "tailwind-styled-components";
import LayoutSection from "../../../shared/LayoutSection";
import CurveImg from "./CurveImg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { swiperOpacityImgs } from "../data";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function SwiperOpacity() {
  const [activeImg, setActiveImg] = useState(0);
  const handleNextImg = () => {
    setActiveImg((prevInd) =>
      prevInd === swiperOpacityImgs.length - 1 ? 0 : prevInd + 1
    );
  };
  const handlePrevImg = () => {
    setActiveImg((prevInd) =>
      prevInd === 0 ? swiperOpacityImgs.length - 1 : prevInd - 1
    );
  };
  return (
    <LayoutSection styles="w-[60%] py-28">
      <SlideUpElement offsetY="20%">
        <motion.div
          animate="animate"
          whileHover="whileHover"
          className="relative"
        >
          <NavLink to="/about" className="relative">
            <AnimatePresence mode="popLayout">
              <motion.div key={activeImg} {...imagesVariants}>
                <div className="flex-between gap-x-6">
                  <h1 className="font-bold text-white text-7xl min-w-max">
                    Top Tier Builders
                  </h1>
                  <div className="lime-line"></div>
                  <span className="px-6 py-2 font-medium tracking-widest rounded-lg text-darkGray bg-lime">
                    RESIDENTIAL
                  </span>
                </div>
                <Folder>
                  <img
                    src={swiperOpacityImgs[activeImg]}
                    alt={swiperOpacityImgs[activeImg]}
                    className="absolute object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute">
                    <h1>
                      <CurveImg tr curveColor="black" /> Construction
                    </h1>
                    <h1>
                      <CurveImg tr bl curveColor="black" /> Experts
                    </h1>
                  </div>
                </Folder>
                <ArrowButton />
              </motion.div>
            </AnimatePresence>
          </NavLink>
          {/* swiper navigation controls */}
          <SwiperControlsWrapper>
            <button onClick={handleNextImg}>
              <IoIosArrowForward />
            </button>
            <button onClick={handlePrevImg}>
              <IoIosArrowBack />
            </button>
          </SwiperControlsWrapper>
        </motion.div>
      </SlideUpElement>
    </LayoutSection>
  );
}

const SwiperControlsWrapper = tw.div`
flex
flex-col
gap-y-2
absolute 
top-1/2
right-0
translate-x-1/2
-translate-y-1/2
text-black
text-4xl
z-10
w-fit
[&_button]:bg-lime
[&_button]:p-9
[&_button:hover]:bg-[#82a84a]
[&_button]:rounded-full
`;

const Folder = tw.div`
[&_h1]:w-fit
[&_h1]:pb-4
[&_h1]:pr-10
[&_h1]:rounded-br-3xl
[&_h1]:bg-black
[&_h1]:text-7xl
[&_h1]:relative
relative
mt-4
h-[80vh]
font-semibold 
text-outline
`;

const imagesVariants = {
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },
  exit: { opacity: 0.2 },
  transition: { duration: 0.4 },
};
