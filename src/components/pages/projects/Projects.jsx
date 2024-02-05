import tw from "tailwind-styled-components";
import PageWrapper from "../../PageWrapper";
import LayoutSection from "../../shared/LayoutSection";
import SectionTitle from "../../shared/SectionTitle";
import { projects_data } from "./data";
import { GridFolders } from "../home/Home";
import { ContactForm } from "../contact/Contact";
import SlideUpElement from "../../shared/SlideUpElement";

export default function Projects() {
  return (
    <PageWrapper
      title="Constructs - Projects"
      description="our projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
      href="/projects"
      bg="bg-black"
    >
      <LayoutSection styles="w-[60%] py-28">
        <SectionTitle
          h1="our"
          h2="projects"
          par="latest"
          styles="border-lime mb-10 pb-10 text-center flex-col [&_p]:text-lightGray [&_h3]:text-lightGray [&_h2]:text-lime [&_h1]:text-white"
        />
        <div className="grid grid-cols-2 py-10 gap-14">
          {projects_data.map((data, i) => (
            <SlideUpElement key={i} ind={i + 1} offsetY="35%">
              <StickyItems data={data} key={data.title} />
            </SlideUpElement>
          ))}
        </div>
      </LayoutSection>
      <GridFolders />

      <div className="bg-gray-200">
        <LayoutSection id="form" styles="w-[35%] py-20">
          <SlideUpElement offsetY="35%">
            <ContactForm title="Request A Quote" />
          </SlideUpElement>
        </LayoutSection>
      </div>
    </PageWrapper>
  );
}

const StickyItems = ({ data }) => {
  const { title, img, text } = data;
  return (
    <div className="rounded-2xl sticky top-0 overflow-hidden  [&_img]:hover:scale-110">
      <img src={img} alt={title} />
      <CardText>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-lg font-medium">{text}</p>
      </CardText>
    </div>
  );
};

const CardText = tw.div`
absolute
bottom-0
left-1/2 
w-full 
bg-gradient-to-b
from-[#b5b5b511]
to-[#292a2ceb]
py-10
-translate-x-1/2 
text-center 
space-y-2 
text-white`;