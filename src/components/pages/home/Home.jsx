import CurveImg from "./comps/CurveImg";
import Services from "./comps/Services";
import SwiperOpacity from "./comps/SwiperOpacity";
import AllProjects from "./comps/AllProjects";
import GetStarted from "../../shared/GetStarted";
import PageWrapper from "../../PageWrapper";
import { BlogsGrid } from "../blog/Blog";
import SlideUpElement from "../../shared/SlideUpElement";
import LayoutSection from "../../shared/LayoutSection";

export default function Home() {
  return (
    <PageWrapper
      title="Constructs"
      description="rendom shit pla pla get Loremed ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo fugit adipisci assumenda nesciunt dignissimos."
      href="https://osama263.github.io/constructs/"
      bg="bg-black"
    >
      <SwiperOpacity />
      {/* 3 folders grid bg lime section */}
      <GridFolders />
      <Services />
      <AllProjects />
      <BlogsGrid homeUrl="blogs" />
      <GetStarted overlayBgc="bg-gray-200" />
    </PageWrapper>
  );
}

export const GridFolders = () => {
  return (
    <div className="py-28 bg-lime rounded-t-[60px]">
      <LayoutSection styles="grid md:grid-cols-3 md:gap-6 gap-12 !py-0">
        <SlideUpElement offsetY="70%" ind={1}>
          <Folder
            title="RESIDENTIAL"
            num="469"
            styles="text-black [&_p]:text-darkGray [&_span]:bg-black bg-white"
            par="We are the ideal choice"
          />
        </SlideUpElement>
        <SlideUpElement offsetY="70%" ind={2}>
          <Folder
            title="COMMERCIAL"
            num="136"
            styles="text-white [&_p]:text-lightGray [&_span]:bg-lime bg-darkGray"
            par="Our skilled craftsmen"
          />
        </SlideUpElement>
        <SlideUpElement offsetY="70%" ind={3}>
          <Folder
            title="RENOVATION"
            num="269"
            styles="text-white [&_p]:text-white [&_span]:bg-white bg-black"
            par="We are the right choose"
          />
        </SlideUpElement>
      </LayoutSection>
    </div>
  );
};

const Folder = (props) => {
  const { title, num, styles, par } = props;

  return (
    <div className={"relative rounded-3xl md:w-full w-1/2 mx-auto  " + styles}>
      <div className="relative font-medium grid grid-cols-3">
        <h1 className="lg:p-6 p-4 sm:text-base text-sm relative w-full bg-lime col-span-2 rounded-br-xl !text-black">
          {title}
          <CurveImg tr bl curveColor="lime" />
        </h1>
        <div></div>
      </div>
      <div className="flex flex-col px-16 items-center justify-center py-4 space-y-2">
        <h1 className="font-bold xl:text-6xl 2xl:text-8xl text-4xl">{num}</h1>
        <h2 className="xl:text-4xl text-2xl italic font-extralight">
          projects
        </h2>
        <span className="w-[10%] h-[1px] mx-auto !mt-4"></span>
        <p className="xl:text-lg min-w-max">{par}</p>
      </div>
    </div>
  );
};

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
