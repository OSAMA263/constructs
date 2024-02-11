import tw from "tailwind-styled-components";
import { Q_A_DATA } from "./data";
import PageWrapper from "../../../PageWrapper";
import LayoutSection from "../../../shared/LayoutSection";
import SlideUpElement from "../../../shared/SlideUpElement";

export default function SingleService(props) {
  const { smallTitle, largeTitle, par, background, title, description, href } =
    props;

  return (
    <PageWrapper {...{ title, description, href, bg: "bg-black" }}>
      <LayoutSection styles="w-[90%] py-28">
        <Hero {...{ smallTitle, largeTitle, par, background }} />
        <PageContent />
      </LayoutSection>
    </PageWrapper>
  );
}

const Hero = (props) => {
  const { smallTitle, largeTitle, par, background } = props;
  return (
    <>
      <SlideUpElement offsetY="20%">
        <div className="flex justify-between gap-x-10 !items-end mb-20">
          <div className="space-y-4">
            <h6 className="uppercase text-lime">{smallTitle}</h6>
            <h1 className="xl:text-6xl text-2xl font-bold text-white">
              {largeTitle}
            </h1>
          </div>
          <p className="text-lightGray max-sm:hidden">{par}</p>
        </div>
      </SlideUpElement>
      {/* FIXED BG IMAGE */}

      <div
        style={{
          background: `url('${background}')`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize:"cover",
          backgroundPosition: "center",
        }}
        className="min-h-[400px] w-full"
      ></div>
    </>
  );
};

const PageContent = () => {
  return (
    <div className="relative grid sm:grid-cols-5 grid-cols-2 mt-28 2xl:gap-28 gap-10">
      <div className="col-span-3">
        <SlideUpElement offsetY="20%" styles="space-y-12">
          {Q_A_DATA.map(({ Q, A }) => (
            <div className="space-y-2" key={Q}>
              <h1 className="xl:text-5xl text-3xl font-bold text-white capitalize ">
                {Q}
              </h1>
              <p className="xl:text-lg text-sm font-medium text-lightGray">
                {A}
              </p>
            </div>
          ))}
        </SlideUpElement>
      </div>
      {/* FORM ASHIDE */}
      <aside className="sticky top-0 right-0 sm:col-span-2 col-span-3 h-fit">
        <SlideUpElement offsetY="20%">
          <div className="md:p-10 p-4 space-y-4 rounded-2xl bg-darkGray text-lightGray">
            {/* FORM TITLE TEXT */}
            <div>
              <h1 className="mb-4 xl:text-4xl text-xl font-semibold">
                Get a Free Estimate
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                beatae.
              </p>
            </div>
            {/* FORM INPUTS */}
            <Form action="">
              <label htmlFor="name">
                name
                <input id="name" type="text" placeholder="user name" />
              </label>
              <label htmlFor="email">
                email
                <input id="email" type="email" placeholder="email address" />
              </label>
              <label htmlFor="phone">
                phone
                <input id="phone" type="number" placeholder="0123456789" />
              </label>
              <button className="block lg:p-4 p-1 mx-auto text-black bg-lime rounded-2xl hover:bg-lightGray">
                Receive A Call
              </button>
            </Form>
          </div>
        </SlideUpElement>
      </aside>
    </div>
  );
};

const Form = tw.form`
space-y-4
[&_input]:xl:p-4
[&_input]:p-2
[&_input]:rounded-2xl
[&_label]:flex
[&_label]:flex-col
[&_label]:gap-y-2
[&_label]:uppercase
font-medium
`;
