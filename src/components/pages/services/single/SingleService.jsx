import React from "react";
import PageWrapper from "../../../PageWrapper";
import LayoutSection from "../../../shared/LayoutSection";
import SectionTitle from "../../../shared/SectionTitle";
import tw from "tailwind-styled-components";

export default function SingleService() {
  return (
    <PageWrapper bg="bg-black">
      <LayoutSection styles="w-[60%] py-28">
        <Hero smallTitle="home" largeTitle="Residential" />
        <PageContent />
      </LayoutSection>
    </PageWrapper>
  );
}
const Hero = ({ largeTitle, smallTitle, par }) => {
  return (
    <>
      <div className="flex-between !items-end mb-20">
        <div className="space-y-4">
          <h6 className="text-lime uppercase">{smallTitle}</h6>
          <h1 className="font-bold text-6xl text-white">{largeTitle}</h1>
        </div>
        <p className="text-lightGray">{par}</p>
      </div>
      {/* FIXED BG IMAGE */}
      <div className="bg-[url('swiper1.jpg')] bg-fixed min-h-[400px] bg-no-repeat bg-cover"></div>
    </>
  );
};

const PageContent = () => {
  return (
    <div className="mt-28 grid grid-cols-5 relative gap-x-28">
      <article className="space-y-12 col-span-3">
        <div className="space-y-2">
          <h1 className=" text-white text-6xl font-bold capitalize">
            titletitletitletitletitle
          </h1>
          <p className="text-lightGray font-medium text-lg">
            We specialize in crafting exceptional homes that embody your unique
            vision and desires. With our unwavering commitment to quality,
            attention to detail, and personalized service, we are dedicated to
            making your dream home a reality.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold capitalize">
            titletitletitletitletitle
          </h1>
          <p className="text-lightGray font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, alias
            rem cupiditate blanditiis iure impedit totam necessitatibus vitae
            culpa tenetur saepe officiis, nesciunt distinctio quibusdam.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold capitalize">
            titletitletitletitletitle
          </h1>
          <p className="text-lightGray font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, alias
            rem cupiditate blanditiis iure impedit totam necessitatibus vitae
            culpa tenetur saepe officiis, nesciunt distinctio quibusdam.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-bold capitalize">
            titletitletitletitletitle
          </h1>
          <p className="text-lightGray font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, alias
            rem cupiditate blanditiis iure impedit totam necessitatibus vitae
            culpa tenetur saepe officiis, nesciunt distinctio quibusdam.
          </p>
        </div>
      </article>
      {/* FORM ASHIDE */}
      <aside className="sticky top-0 right-0 col-span-2">
        <div className="rounded-2xl space-y-4 p-10 bg-darkGray text-lightGray">
          {/* FORM TITLE TEXT */}
          <div>
            <h1 className="text-4xl mb-4 font-semibold">Get a Free Estimate</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              beatae.
            </p>
          </div>
          {/* FORM INPUTS */}
          <Form action="">
            <label htmlFor="name">
              name
              <input name="name" type="text" placeholder="user name" />
            </label>
            <label htmlFor="email">
              email
              <input name="email" type="email" placeholder="email address" />
            </label>
            <label htmlFor="phone">
              phone
              <input name="phone" type="number" placeholder="0123456789" />
            </label>
            <button className="p-4 bg-lime mx-auto block rounded-2xl text-black hover:bg-lightGray">
              Receive A Call
            </button>
          </Form>
        </div>
      </aside>
    </div>
  );
};
const Form = tw.form`
space-y-4
[&_input]:p-4
[&_input]:rounded-2xl
[&_label]:flex
[&_label]:flex-col
[&_label]:gap-y-2
[&_label]:uppercase
font-medium
`;
