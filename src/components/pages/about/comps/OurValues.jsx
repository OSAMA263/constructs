import tw from "tailwind-styled-components";
import LayoutSection from "../../../shared/LayoutSection";
import { FaLocationArrow } from "react-icons/fa";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { BsBuildingGear, BsBuildings } from "react-icons/bs";
import SectionTitle from "../../../shared/SectionTitle";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function OurValues() {
  return (
    <div className="bg-lime rounded-t-[60px]">
      <LayoutSection styles="2xl:w-[70%]">
        <SectionTitle
          h1="our"
          h2="values"
          par="what we belive"
          styles="border-black sm:text-center sm:flex-col"
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
      </LayoutSection>
    </div>
  );
}

const GridCard = ({ styles, icon, title }) => {
  return (
    <div className={styles + " rounded-2xl 2xl:p-14 p-6 flex flex-col gap-y-8"}>
      <span className="text-4xl">{icon}</span>
      <h1 className="2xl:text-4xl text-2xl font-semibold">{title}</h1>
      <p className="font-medium text-balance">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

const Grid = tw.div`
grid 
xl:grid-cols-4
sm:grid-cols-2
gap-8
py-8
`;
