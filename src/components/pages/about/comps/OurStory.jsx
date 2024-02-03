import LayoutSection from "../../../shared/LayoutSection";
import SectionTitle from "../../../shared/SectionTitle";
import { ourStory, history } from "../data";
import tw from "tailwind-styled-components";

export default function OurStory() {
  return (
    <>
      <LayoutSection id="story" styles="bg-lime rounded-t-[60px]">
        <WhoWeAre />
      </LayoutSection>
      <LayoutSection styles="bg-black rounded-b-[60px]">
        <History />
      </LayoutSection>
    </>
  );
}

const WhoWeAre = () => {
  return (
    <div className="w-[50%] py-28 text-center space-y-6 mx-auto">
      <SectionTitle
        h1="discover"
        h2="our story"
        par="who we are"
        styles="flex flex-col border-black"
      />
      {/* article with zoomed in img on scroll */}
      <Article>
        <div className="flex-col leading-6 flex-between gap-y-6">
          {ourStory.map((par, i) => (
            <p key={i + "line"}>{par}</p>
          ))}
        </div>
        <img
          src="about/tall building.jpg"
          className="h-full rounded-2xl"
          alt=""
        />
      </Article>
    </div>
  );
};

const History = () => {
  return (
    <HistoryGrid>
      {history.map((obj, i) => (
        <div key={i} className="items-center flex-between pe-20 gap-x-6">
          {i % 2 !== 0 && (
            <>
              <div className="flex flex-col font-semibold gap-y-2 min-w-max">
                <span className="p-6 text-3xl bg-darkGray w-fit rounded-xl text-lime">
                  {obj.icon}
                </span>
                <h1 className="text-3xl font-bold">{obj.state}</h1>
                <p className="text-lime">{obj.date}</p>
              </div>
              <h1>{obj.text}</h1>
            </>
          )}
        </div>
      ))}
      <LineWithDots />
    </HistoryGrid>
  );
};

const Article = tw.div`
pt-10
grid
grid-cols-2 
gap-x-10 
text-start 
text-lg
text-darkGray
`;

const HistoryGrid = tw.div`
grid
grid-cols-3
grid-rows-2
relative
w-[70%]  
gap-y-20
mx-auto 
py-28
text-white
`;

const LineWithDots = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px]">
      <div className="grid w-full h-full grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i + "line"}
            className={
              i === 2
                ? "bg-gradient-to-r from-lime to-transparent"
                : "" +
                  " h-[1px] relative bg-lime rounded-full top-1/2 -translate-y-1/2"
            }
          >
            <span className="absolute top-1/2 bg-lime -translate-y-1/2 rounded-full p-2"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
