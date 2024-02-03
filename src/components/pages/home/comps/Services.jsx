import tw from "tailwind-styled-components";
import CurveImg from "./CurveImg";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import LayoutSection from "../../../shared/LayoutSection";
import { servicesGrid } from "../data";
import SectionTitle from "../../../shared/SectionTitle";

export default function Services() {
  return (
    <LayoutSection styles="w-[60%] py-28">
      <SectionTitle
        h1="Our"
        h2="Services"
        par="OVERVIEW"
        styles="flex-between border-lime [&_h1]:text-white [&_h2]:text-lime [&_h3]:text-lightGray [&_p]:text-lightGray"
      />
      {/* 3 ROWS GRID CARDS */}
      <div className="space-y-32">
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
  const { title, bigImg, smallImg, card, bigText } = data;

  return (
    <div className={flexDir + ` flex h-[80vh] overflow-y-hidden gap-x-8`}>
      {/* left content */}
      <NavLink className="w-full h-full">
        <LeftContentWrapper animate="animate" whileHover="whileHover">
          <div className="flex-between gap-x-10">
            <h1>{title}</h1>
            <div className="lime-line"></div>
            <h3 className="px-6 py-2 tracking-widest rounded-lg text-darkGray bg-lime">
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
              <h2 className="relative p-4 text-5xl bg-black text-outline rounded-br-2xl w-fit">
                0{i + 1} Service <CurveImg tr bl curveColor="black" />
              </h2>
            </div>
          </div>
          <ArrowButton />
        </LeftContentWrapper>
      </NavLink>
      {/* right content */}
      <NavLink className="w-[45%] h-full">
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
            <h1 className="text-3xl font-bold">{card.title}</h1>
            <p className="font-medium ">{card.text} </p>
            <button className="text-3xl lime-button">
              <GoPlus />
            </button>
          </Card>
          <p className="text-3xl leading-normal text-white">{bigText}</p>
        </RightContentWrapper>
      </NavLink>
    </div>
  );
};

const LeftContentWrapper = tw(motion.div)`
[&_h1]:text-white
text-nowrap
[&_h1]:text-5xl
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
`;

const Card = tw.div`
p-6 
flex
flex-col 
gap-y-4
bg-darkGray
row-span-2
relative
text-balance
`;

const HouseIcon = tw.span`
w-fit 
rounded-xl 
text-5xl 
text-lime 
shadow-[4px_4px_20px_0.5px_#bef66b7e]
bg-black
p-10
`;
