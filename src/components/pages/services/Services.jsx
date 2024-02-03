import { Link } from "react-router-dom";
import PageWrapper from "../../PageWrapper";
import LayoutSection from "../../shared/LayoutSection";
import SectionTitle from "../../shared/SectionTitle";

export default function Services() {
  return (
    <PageWrapper bg="bg-gray-200">
      <LayoutSection styles="w-[60%] py-28">
        <SectionTitle
          h1="our"
          h2="services"
          par="overview"
          styles="flex-between border-black mb-20"
        />
        {/* sticky divs */}
        <div className="space-y-20">
          {DATA_TEXT.map((data) => (
            <StickyItem data={data} key={data.title} />
          ))}
        </div>
      </LayoutSection>
    </PageWrapper>
  );
}

const StickyItem = ({ data }) => {
  const { lime_title, title, text, img } = data;
  return (
    <div className="sticky top-0 ">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl">
        <div className="flex flex-col items-center justify-center px-20 font-medium text-center gap-y-6 bg-darkGray ">
          <h6 className="uppercase text-lime">{lime_title}</h6>
          <h1 className="text-5xl text-white">{title}</h1>
          <p className="text-white">{text} </p>
          <Link className="p-4 px-10 text-sm bg-lime hover:bg-lightGray">
            LEARN MORE
          </Link>
        </div>
        {/* img */}
        <img src={img} alt="" />
      </div>
    </div>
  );
};

const DATA_TEXT = [
  {
    lime_title: "home",
    title: "Residential",
    text: " Our skilled craftsmen specialize in residential construction.",
    img: "services/big-img1.jpg",
  },
  {
    lime_title: "BUSINESS",
    title: "Commercial",
    text: "We are the ideal choice for commercial construction.",
    img: "services/big-img2.jpg",
  },
  {
    lime_title: "UPGRADE",
    title: "Renovation",
    text: "We specialize in breathing new life into existing spaces.",
    img: "services/big-img3.jpg",
  },
];
