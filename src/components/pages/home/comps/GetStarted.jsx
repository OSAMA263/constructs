import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function GetStarted({overlayBgc}) {
  return (
    <div className="relative">
      <div className={overlayBgc+" bg-gray-200 py-36"}></div>
      <GetInTOuch />
      <div className="bg-lime py-36"></div>
    </div>
  );
}

const GetInTOuch = () => {
  return (
    <div className="absolute top-1/2 tracking-wide -translate-y-1/2 w-1/2 left-1/2 -translate-x-1/2 ">
      <img src="get-in-touch.jpg" alt="" className="rounded-2xl" />
      {/* get in touch text */}
      <div className="absolute mt-20 top-0 w-full flex items-center flex-col gap-y-4">
        <h1 className="text-5xl font-semibold">
          Ready To Get
          <span className="font-light italic"> Started</span>
        </h1>
        <p className="flex flex-col text-darkGray">
          <span>Claim your quote today consectetur adipiscing. </span>
          <span>Suspendisse varius in elementum tristique.</span>
        </p>
        <Link className="p-4 font-medium rounded-xl bg-lime [&_svg]:-rotate-45 [&:hover_svg]:rotate-0">
          <span className="flex items-center gap-x-4">
            GET IN TOUCH <IoArrowForward />
          </span>
        </Link>
      </div>
    </div>
  );
};
