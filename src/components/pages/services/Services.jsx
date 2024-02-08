import { Link, Outlet } from "react-router-dom";
import PageWrapper from "../../PageWrapper";
import LayoutSection from "../../shared/LayoutSection";
import SectionTitle from "../../shared/SectionTitle";
import SlideUpElement from "../../shared/SlideUpElement";
import tw from "tailwind-styled-components";

export default function Services() {
  return (
    <>
      <PageWrapper
        title="Constructs - Services"
        description="our blogs Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
        href="https://osama263.github.io/constructs/#/services"
        bg="bg-gray-200"
      >
        <LayoutSection styles="2xl:w-[60%]">
          <SectionTitle
            h1="our"
            h2="services"
            par="overview"
            styles="flex-between border-black mb-20"
          />
          <SlideUpElement offsetY="30%">
            {/* sticky divs */}
            <div className="space-y-10">
              {DATA_TEXT.map((data) => (
                <StickyItem data={data} key={data.title} />
              ))}
            </div>
          </SlideUpElement>
        </LayoutSection>
      </PageWrapper>
      <Outlet />
    </>
  );
}

const StickyItem = ({ data }) => {
  const { lime_title, title, text, img, url } = data;
  return (
    <div className="sticky top-0">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl">
        <StickyGrid>
          <h6 className="sm:text-base text-xs uppercase text-lime">{lime_title}</h6>
          <h1 className="xl:text-5xl sm:text-3xl text-2xl text-white">{title}</h1>
          <p className="sm:text-base text-xs text-white">{text}</p>
          <Link
            to={url}
            className="sm:p-4 sm:px-10 p-2 md:text-sm text-xs bg-lime hover:bg-lightGray"
          >
            LEARN MORE
          </Link>
        </StickyGrid>
        {/* service background image background */}
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

const StickyGrid=tw.div`
flex 
flex-col 
items-center 
justify-center 
md:px-20 
px-2 
gap-y-4
text-center 
py-4 
font-medium 
bg-darkGray 
`

const DATA_TEXT = [
  {
    lime_title: "home",
    title: "Residential",
    text: " Our skilled craftsmen specialize in residential construction.",
    img: "services/big-img1.webp",
    url: "residential",
  },
  {
    lime_title: "BUSINESS",
    title: "Commercial",
    text: "We are the ideal choice for commercial construction.",
    img: "services/big-img2.webp",
    url: "commercial",
  },
  {
    lime_title: "UPGRADE",
    title: "Renovation",
    text: "We specialize in breathing new life into existing spaces.",
    img: "services/big-img3.webp",
    url: "renovation",
  },
];
