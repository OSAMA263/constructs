import tw from "tailwind-styled-components";
import CurveImg from "./comps/CurveImg";
import Services from "./comps/Services";
import SwiperOpacity from "./comps/SwiperOpacity";
import AllProjects from "./comps/AllProjects";
import GetStarted from "../../shared/GetStarted";
import PageWrapper from "../../PageWrapper";
import { BlogsGrid } from "../blog/Blog";

export default function Home() {
  return (
    <PageWrapper bg="bg-black">
      <SwiperOpacity />
      {/* 3 folders grid bg lime section */}
      <GridFolders />
      <Services />
      <AllProjects />
      <BlogsGrid />
      <GetStarted overlayBgc="bg-gray-200" />
    </PageWrapper>
  );
}

export const GridFolders = () => {
  return (
    <div className="p-28 bg-lime rounded-t-[60px]">
      <ThreeFolders>
        <Folder
          title="RESIDENTIAL"
          num="469"
          styles="text-black [&_p]:text-darkGray [&_span]:bg-black bg-white"
          par="We are the ideal choice"
        />
        <Folder
          title="COMMERCIAL"
          num="136"
          styles="text-white [&_p]:text-lightGray [&_span]:bg-lime bg-darkGray"
          par="Our skilled craftsmen"
        />
        <Folder
          title="RENOVATION"
          num="269"
          styles="text-white [&_p]:text-white [&_span]:bg-white bg-black"
          par="We are the right choose"
        />
      </ThreeFolders>
    </div>
  );
};

const Folder = (props) => {
  const { title, num, styles, par } = props;

  return (
    <div className={"relative rounded-3xl " + styles}>
      <div className="relative font-medium">
        <h1 className="p-6 pe-28 relative w-fit bg-lime rounded-br-xl !text-black">
          {title}
          <CurveImg tr bl curveColor="lime" />
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-4 space-y-2">
        <h1 className="font-bold text-8xl">{num}</h1>
        <h2 className="text-4xl italic font-extralight">projects</h2>
        <span className="w-[10%] h-[1px] mx-auto !mt-4"></span>
        <p className="text-lg">{par}</p>
      </div>
    </div>
  );
};

const ThreeFolders = tw.div`
w-[70%] 
mx-auto 
grid 
grid-cols-3 
gap-x-6
`;
// const Folder = tw.div`
// [&_h1]:w-fit
// [&_h1]:pb-7
// [&_h1]:pr-10
// [&_h1]:rounded-br-3xl
// [&_h1]:relative
// relative
// mt-7
// h-[80vh]
// `;
