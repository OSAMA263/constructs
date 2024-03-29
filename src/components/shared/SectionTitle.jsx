import tw from "tailwind-styled-components";
import SlideUpElement from "./SlideUpElement";

export default function SectionTitle(props) {
  const { h1, h2, par, styles } = props;
  return (
    <TitleContainer className={styles}>
      <SlideUpElement offsetY="20%" offsetX="100%">
        <div className="flex lg:text-5xl sm:text-4xl text-2xl text-black capitalize gap-x-2">
          <h1 className="font-bold">{h1}</h1>
          <h2 className="italic font-thin">{h2}</h2>
        </div>
      </SlideUpElement>
      <div className="overflow-hidden">
        <SlideUpElement offsetY="20%" offsetX="100%">
          <div className="sm:space-y-4 font-medium text-darkGray">
            <p className="tracking-widest sm:text-base text-sm uppercase">{par}</p>
            <h3 className="md:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </div>
        </SlideUpElement>
      </div>
    </TitleContainer>
  );
}
const TitleContainer = tw.div`
sm:py-10
py-4
max-sm:px-4
mb-16
border-b
flex
sm:flex-row
flex-col
sm:text-start
text-center
items-center
sm:gap-y-4
`;
