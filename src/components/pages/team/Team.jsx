import PageWrapper from "../../PageWrapper";
import LayoutSection from "../../shared/LayoutSection";
import SectionTitle from "../../shared/SectionTitle";
import tw from "tailwind-styled-components";
import { THE_TEAM_DATA } from "./data";
import GetStarted from "../../shared/GetStarted";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

export default function Team() {
  return (
    <PageWrapper
      bg="bg-black"
      title="Constructs - the team"
      description="our blogs Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
      href="/team"
    >
      <LayoutSection id="team" styles="w-[60%] py-28">
        <SectionTitle
          h1="meet our"
          h2="team"
          par="integrity"
          styles="[&_h1]:text-white [&_h2]:text-lime flex-between [&_p]:text-lightGray [&_h3]:text-lightGray border-lime"
        />
        <div className="grid grid-cols-3 gap-x-8">
          {THE_TEAM_DATA.map(({ img, name, role, des }) => (
            <Card key={name}>
              <div className="[&>img]:hover:scale-110 rounded-2xl overflow-hidden">
                <img src={img} alt={name} />
              </div>
              <h1 className="text-lightGray text-4xl">{name}</h1>
              <span className="text-lime">{role}</span>
              <p className="text-lightGray text-lg">{des}</p>
              {/* SOCIAL MEDIA */}
              <div className="flex gap-x-4 text-2xl [&_a:hover]:text-lime text-white">
                <a href="" aria-label="facebook page">
                  <CiFacebook />
                </a>
                <a href="" aria-label="instagram page">
                  <CiInstagram />
                </a>
                <a href="" aria-label="youtube page">
                  <CiYoutube />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </LayoutSection>
      <GetStarted overlayBgc="bg-black" />
    </PageWrapper>
  );
}

const Card = tw.div`
flex 
flex-col 
items-center
gap-y-6
text-center
font-medium
`;
