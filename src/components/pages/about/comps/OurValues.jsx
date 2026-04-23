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
          des="We build trust, relationships, and communities that last."
          styles="border-black sm:text-center sm:flex-col [&_p]:!text-center"
        />
        {/* FOUR CARD GRID OUR VALUES */}
        <Grid>
          <SlideUpElement ind={1} offsetY="69%">
            <GridCard
              title="Hardwork"
              icon={<FaLocationArrow />}
              styles="bg-white text-black [&_p]:!text-gray-500"
              des="Every project gets our full commitment, from the first blueprint to the final brick."
            />
          </SlideUpElement>
          <SlideUpElement ind={2} offsetY="69%">
            <GridCard
              title="Innovation"
              icon={<RiArrowLeftDoubleLine />}
              styles="bg-white text-black [&_p]:!text-gray-500"
              des="We embrace modern techniques and materials to deliver smarter, more efficient builds."
            />
          </SlideUpElement>
          <SlideUpElement ind={3} offsetY="69%">
            <GridCard
              title="Quality"
              icon={<BsBuildingGear />}
              styles="bg-darkGray text-white [&_span]:!text-lime"
              des="No shortcuts. Every structure we deliver meets the highest standards of craftsmanship."
            />
          </SlideUpElement>
          <SlideUpElement ind={4} offsetY="69%">
            <GridCard
              title="Service"
              icon={<BsBuildings />}
              styles="bg-black text-white [&_span]:!text-lime"
              des="Our clients come first. We keep you informed, involved, and satisfied at every stage."
            />
          </SlideUpElement>
        </Grid>
      </LayoutSection>
    </div>
  );
}

const GridCard = ({ styles, icon, title,des }) => {
  return (
    <div className={styles + " rounded-2xl 2xl:p-8 p-4 flex flex-col gap-y-6 h-full"}>
      <span className="text-3xl">{icon}</span>
      <h1 className="2xl:text-4xl text-2xl font-semibold">{title}</h1>
      <p className="font-medium text-balance">
        {des}
      </p>
    </div>
  );
};

const Grid = tw.div`
grid 
xl:grid-cols-4
sm:grid-cols-2
gap-4
`;
