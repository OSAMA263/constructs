import { NavLink } from "react-router-dom";
import { BsExclamationOctagon } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="h-screen relative text-white flex flex-col gap-y-10 items-center justify-center">
      <div className="absolute -z-10 h-full w-full brightness-[.4]">
        <img
          src="swiper1.jpg"
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>
      <span className="text-9xl">
        <BsExclamationOctagon />
      </span>
      <h1 className="text-6xl">Page Not Found</h1>
      <small>
        The page you are looking for doesn't exist or has been moved
      </small>
      <NavLink to="/" className="bg-lime px-6 py-2 rounded-2xl text-black">
        End it?
      </NavLink>
    </div>
  );
}
