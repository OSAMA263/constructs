import tw from "tailwind-styled-components";
import LayoutSection from "../../../shared/LayoutSection";
import { FaLocationArrow } from "react-icons/fa";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { BsBuildingGear, BsBuildings } from "react-icons/bs";
import SectionTitle from "../../../shared/SectionTitle";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function OurValues() {
  return (
    <LayoutSection styles="bg-lime py-28">
      <div className="w-[70%] mx-auto">
        <SectionTitle
          h1="our"
          h2="values"
          par="what we belive"
          styles="border-black flex flex-col text-center"
        />
        {/* FOUR CARD GRID OUR VALUES */}
        <Grid>
          <SlideUpElement ind={1} offsetY="69%">
            <GridCard
              title="Hardwork"
              icon={<FaLocationArrow />}
              styles="bg-white text-black [&_p]:!text-gray-500"
            />
          </SlideUpElement>
          <SlideUpElement ind={2} offsetY="69%">
            <GridCard
              title="Innovation"
              icon={<RiArrowLeftDoubleLine />}
              styles="bg-white text-black [&_p]:!text-gray-500"
            />
          </SlideUpElement>
          <SlideUpElement ind={3} offsetY="69%">
            <GridCard
              title="Quality"
              icon={<BsBuildingGear />}
              styles="bg-darkGray text-white [&_span]:!text-lime"
            />
          </SlideUpElement>
          <SlideUpElement ind={4} offsetY="69%">
            <GridCard
              title="Service"
              icon={<BsBuildings />}
              styles="bg-black text-white [&_span]:!text-lime"
            />
          </SlideUpElement>
        </Grid>
      </div>
    </LayoutSection>
  );
}

const GridCard = ({ styles, icon, title }) => {
  return (
    <div className={styles + " rounded-2xl p-10 py-16 flex flex-col gap-y-8"}>
      <span className="text-4xl">{icon}</span>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="font-medium text-balance">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

const Grid = tw.div`
grid 
grid-cols-4
gap-x-8
py-8
`;
