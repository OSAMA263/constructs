import LayoutSection from "../../../shared/LayoutSection";
import { ourStory, history } from "../data";
import tw from "tailwind-styled-components";

export default function OurStory() {
  return (
    <>
      <LayoutSection styles="bg-lime rounded-t-[60px]">
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
      <h1 className="text-5xl font-bold">
        Discover <span className="font-extralight italic"> Our Story</span>
      </h1>
      <p className="border-b border-black pb-4 font-medium">WHO WE ARE</p>
      {/* article with zoomed in img on scroll */}
      <Article>
        <div className="flex-between flex-col gap-y-6 leading-6">
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
        <div key={i} className="flex-between items-center gap-x-6">
          {i % 2 !== 0 && (
            <>
              <div className="flex flex-col font-semibold gap-y-2 min-w-max">
                <span className="bg-darkGray w-fit p-6 rounded-xl text-3xl text-lime">
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
      <HistoryLimeLine />
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
gap-x-20
mx-auto 
py-28
text-white
`;

const HistoryLimeLine = () => {
  return (
    <div className="bg-gradient-to-r from-lime to-transparent absolute top-1/2 -translate-y-1/2 w-full h-[1px]">
      <div className="grid grid-cols-3 gap-x-20 w-full h-full">
        <div className="w-fit p-2 bg-lime rounded-full top-1/2 -translate-y-1/2"></div>
        <div className="w-fit p-2 bg-[#bef66bed] rounded-full top-1/2 -translate-y-1/2"></div>
        <div className="w-fit p-2 bg-[#bef66bb9] rounded-full top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};
