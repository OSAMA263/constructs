import { NavLink } from "react-router-dom";
import LimeButtonArrow from "./LimeButtonArrow";
import SlideUpElement from "./SlideUpElement";

export default function GetStarted({ overlayBgc }) {
  return (
    <div className="relative">
      {/* FIRST HALF OF BGC */}
      <div className={overlayBgc + " 2xl:py-44 md:py-32 py-24"}></div>
      {/* ?CONTENT */}
      <SlideUpElement offset="35%">
        <div className="absolute xl:w-[50%] lg:w-[60%] w-[90%] tracking-wide -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <img
            src="get-in-touch.jpg"
            alt="contact bg"
            className="rounded-2xl w-full h-full"
          />
          {/* get in touch text */}
          <div className="absolute top-[8%] flex flex-col items-center w-full gap-y-6">
            <h1 className="2xl:text-5xl sm:text-4xl text-3xl font-semibold">
              Ready To Get
              <span className="italic font-light"> Started</span>
            </h1>
            <p className="flex flex-col sm:text-base text-sm text-darkGray">
              <span>Claim your quote today consectetur adipiscing. </span>
              <span>Suspendisse varius in elementum tristique.</span>
            </p>
            <LimeButtonArrow text="get in touch">
              <NavLink to="/contact"></NavLink>
            </LimeButtonArrow>
          </div>
        </div>
      </SlideUpElement>
      {/* SECOND HALF BG */}
      <div className="bg-lime xl:py-44 py-32"></div>
    </div>
  );
}
