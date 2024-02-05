import { NavLink } from "react-router-dom";
import LimeButtonArrow from "./LimeButtonArrow";
import SlideUpElement from "./SlideUpElement";

export default function GetStarted({ overlayBgc }) {
  return (
    <div className="relative">
      {/* FIRST HALF OF BGC */}
      <div className={overlayBgc + " py-44"}></div>
      {/* ?CONTENT */}
      <SlideUpElement offset="35%">
        <div className="absolute w-1/2 tracking-wide -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <img
            src="get-in-touch.jpg"
            alt="contact bg"
            className="rounded-2xl"
          />
          {/* get in touch text */}
          <div className="absolute top-0 flex flex-col items-center w-full mt-20 gap-y-6">
            <h1 className="text-5xl font-semibold">
              Ready To Get
              <span className="italic font-light"> Started</span>
            </h1>
            <p className="flex flex-col text-darkGray">
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
      <div className="bg-lime py-44"></div>
    </div>
  );
}
