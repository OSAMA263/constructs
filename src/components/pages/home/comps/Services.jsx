import tw from "tailwind-styled-components";
import CurveImg from "./CurveImg";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import LayoutSection from "../../../shared/LayoutSection";
import { servicesGrid } from "../data";
import SectionTitle from "../../../shared/SectionTitle";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function Services() {
  return (
    <LayoutSection>
      <SectionTitle
        h1="Our"
        h2="Services"
        par="OVERVIEW"
        styles="flex-between border-lime [&_h1]:text-white [&_h2]:text-lime [&_h3]:text-lightGray [&_p]:text-lightGray"
      />
      {/* 3 ROWS GRID CARDS */}
      <div className="lg:space-y-32 space-y-20">
        {servicesGrid.map((row, i) => (
          <GridColumn
            i={i}
            key={i}
            data={row}
            flexDir={i % 2 === 0 ? "" : "flex-row-reverse"}
          />
        ))}
      </div>
    </LayoutSection>
  );
}

const GridColumn = ({ flexDir, data, i }) => {
  const { title, bigImg, smallImg, card, bigText, url } = data;

  return (
    <div className={flexDir + ` sm:flex h-[80vh] overflow-y-hidden gap-x-8`}>
      {/* left content */}
      <SlideUpElement offsetY="50%" styles="h-full w-full">
        <Link to={url}>
          <LeftContentWrapper animate="animate" whileHover="whileHover">
            <div className="flex-between gap-x-10">
              <h1>{title}</h1>
              <div className="lime-line"></div>
              <h3 className="xl:px-6 xl:py-2 p-2 md:text-base text-xs tracking-widest rounded-lg text-darkGray bg-lime">
                LEARN MORE
              </h3>
            </div>
            {/* img */}
            <div className="relative h-full">
              <img
                src={bigImg}
                alt={bigImg}
                className="absolute object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute">
                <h2 className="relative p-4 xl:text-5xl text-3xl bg-black text-outline rounded-br-2xl w-fit">
                  0{i + 1} Service <CurveImg tr bl curveColor="black" />
                </h2>
              </div>
            </div>
            <ArrowButton url={url} />
          </LeftContentWrapper>
        </Link>
      </SlideUpElement>
      {/* right content */}
      <SlideUpElement
        ind={2}
        offsetY="50%"
        styles="h-full sm:block hidden w-[45%]"
      >
        <Link to={url}>
          <RightContentWrapper>
            <div className="h-full overflow-hidden">
              <img
                src={smallImg}
                alt={smallImg}
                className="object-cover w-full h-full"
              />
            </div>
            <Card>
              <HouseIcon>{card.icon}</HouseIcon>
              <h1 className="2xl:text-3xl text-2xl font-bold">{card.title}</h1>
              <p className="font-medium xl:text-base text-sm">{card.text} </p>
              <button
                aria-label={"open " + url}
                className="text-3xl lime-button"
              >
                <GoPlus />
              </button>
            </Card>
            <p className="xl:text-3xl leading-normal text-xl text-white">
              {bigText}
            </p>
          </RightContentWrapper>
        </Link>
      </SlideUpElement>
    </div>
  );
};

const LeftContentWrapper = tw(motion.div)`
[&_h1]:text-white
text-nowrap
[&_h1]:xl:text-5xl
[&_h1]:text-4xl
font-semibold
w-full
h-full
gap-y-4
flex 
flex-col
relative
`;

const RightContentWrapper = tw.div`
h-full 
grid 
grid-rows-4 
gap-y-8 
[&>div]:rounded-2xl
[&_button]:hover:text-white
text-white
`;

const Card = tw.div`
p-6 
flex
flex-col 
xl:gap-y-4

gap-y-2
bg-darkGray
row-span-2
relative
text-balance
`;

const HouseIcon = tw.span`
w-fit 
rounded-xl 
xl:text-4xl
2xl:text-5xl
xl:p-10
p-6
text-3xl 
text-lime 
shadow-[4px_4px_20px_0.5px_#bef66b7e]
bg-black
`;
