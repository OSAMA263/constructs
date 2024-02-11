import { Link } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";
import LayoutSection from "../../shared/LayoutSection";
import { DATA_BLOGS } from "./data";
import { GoPlus } from "react-icons/go";
import PageWrapper from "../../PageWrapper";
import SlideUpElement from "../../shared/SlideUpElement";
import tw from "tailwind-styled-components";

export default function Blog() {
  return (
    <PageWrapper
      bg="bg-gray-200"
      title="Constructs - Blogs"
      description="our blogs Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
      href="https://osama263.github.io/constructs/#/blogs"
    >
      <BlogsGrid />
    </PageWrapper>
  );
}

export const BlogsGrid = ({ homeUrl }) => {
  return (
    <div className="bg-gray-200">
      <LayoutSection id="blogs">
        <SectionTitle
          h1="our"
          h2="blog"
          par="our recent articles"
          styles="border-black flex-between"
        />
        <div className="grid lg-mobile:grid-cols-3 lg-mobile:gap-4 gap-y-10">
          {DATA_BLOGS.map(({ bg, details, text }, i) => (
            <SlideUpElement key={text} offsetY="40%" ind={i + 1}>
              <Card {...{ bg, details, text, homeUrl }} />
            </SlideUpElement>
          ))}
        </div>
      </LayoutSection>
    </div>
  );
};

const Card = ({ bg, details, text, homeUrl }) => {
  const { avatar, name, role, date } = details;

  return (
    <Link
      to={homeUrl ?? ""}
      className="relative space-y-4 font-medium lg-mobile:w-full sm:w-1/2 w-[60%] mx-auto block text-darkGray"
    >
      <img src={bg} className="rounded-2xl" alt={bg} />
      {/* avatar details */}
      <ContentWrapper>
        <div className="flex items-center gap-x-4">
          <img className="w-16 rounded-full" src={avatar} alt={avatar} />
          <div className="flex flex-col items-center gap-y-2">
            <h1>{name}</h1>
            <small className="w-1/2 h-[1px] bg-black"></small>
          </div>
        </div>
        {/*  */}
        <div className="space-y-2 tracking-widest text-center">
          <h1 className="p-2 rounded-lg bg-lime w-fit">{role}</h1>
          <h1>{date}</h1>
        </div>
      </ContentWrapper>
      {/* large text */}
      <h1 className="2xl:text-4xl lg:text-2xl font-semibold text-black">
        {text}
      </h1>
      <button
        aria-label="pluse icon"
        className="lime-button !bottom-[85%] text-2xl"
      >
        <GoPlus />
      </button>
    </Link>
  );
};

const ContentWrapper=tw.div`
lg:text-sm 
text-xs 
flex
max-[450px]:flex-col
max-[450px]:items-center 
gap-y-2
justify-between
`