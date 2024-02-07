import tw from "tailwind-styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Slide } from "@chakra-ui/transition";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function Navbar() {
  const [hoverdLink, setHoverdLink] = useState("/");
  const [linkColor, setLinkColor] = useState("white");
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [small_device] = useMediaQuery("(max-width: 864px)");
  // changes active link & underline color
  useEffect(() => {
    setHoverdLink(pathname);
    if (
      pathname === "/about" ||
      pathname === "/services" ||
      pathname === "/blogs" ||
      pathname === "/contact"
    ) {
      setLinkColor("black");
    } else {
      setLinkColor("white");
    }
  }, [pathname]);

  // disable scroll when mobile navigate list is open
  useEffect(() => {
    isOpen && small_device
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOpen, small_device]);

  return (
    <>
      <HeaderContainer
        className={
          isOpen && small_device
            ? "lg-mobile:bg-transparent bg-black"
            : "bg-transparent delay-500 transition-all duration-500"
        }
      >
        <Header className={linkColor === "white" ? "text-white" : "text-black"}>
          <Link to="/" className="w-60" aria-label="home">
            <img
              src={
                linkColor === "white" || (isOpen && small_device)
                  ? "logo-white.svg"
                  : "logo-dark.svg"
              }
              alt="logo"
              className="w-[80%]"
            />
          </Link>
          {/* DESKTOP NAVLINKS */}
          <nav className="lg-mobile:block hidden">
            <LinksList>
              {navLinks.map(({ label, url }) => (
                <li className="relative" key={label}>
                  <NavLink
                    className="relative px-[1px]"
                    onMouseEnter={() => setHoverdLink(url)}
                    onMouseLeave={() => setHoverdLink(pathname)}
                    to={url}
                  >
                    {label}
                  </NavLink>
                  {/* line under link */}
                  {hoverdLink === url && (
                    <motion.div
                      layoutId="underline"
                      className={`${
                        linkColor === "white" ? "bg-white" : "bg-black"
                      } h-[1px] w-full absolute`}
                    ></motion.div>
                  )}
                </li>
              ))}
            </LinksList>
          </nav>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg-mobile:hidden block"
            aria-label="toggle nav links"
          >
            <ToggleIcon {...{ linkColor, isOpen }} />
          </button>
        </Header>
      </HeaderContainer>
      {/* MOBILE NAVLINK LIST TOGGLE */}
      <MobileNavList {...{ isOpen, setIsOpen }} />
    </>
  );
}
// NAVLINKS ON SMALL DEVICES
const MobileNavList = ({ isOpen, setIsOpen }) => {
  return (
    <Slide
      transition={{ enter: { duration: 0.7 }, exit: { duration: 0.7 } }}
      direction="top"
      className="lg-mobile:hidden text-center flex justify-center items-center bg-darkGray absolute top-0 w-full !z-10 h-screen"
      in={isOpen}
    >
      <nav>
        <ul className="space-y-2 text-xl font-medium uppercase [&_a.active]:text-lime [&_a]:text-lightGray">
          {navLinks.map(({ label, url }) => (
            <li className="relative" key={label}>
              <NavLink onClick={() => setIsOpen((prev) => !prev)} to={url}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Slide>
  );
};

// TOGGLE NAVLINK MENU ICON
const ToggleIcon = ({ isOpen, linkColor }) => {
  return (
    <div className="flex w-10 flex-col gap-y-2 items-end">
      <ToggleLine $isOpen={isOpen} $linkColor={linkColor}></ToggleLine>
      <ToggleLine
        $isOpen={isOpen}
        $linkColor={linkColor}
        className={isOpen ? "w-1/2" : "w-full"}
      ></ToggleLine>
      <ToggleLine $isOpen={isOpen} $linkColor={linkColor}></ToggleLine>
    </div>
  );
};

const ToggleLine = tw.span`
${({ $isOpen, $linkColor }) =>
  $isOpen || $linkColor === "white" ? "bg-white" : "bg-black"}
w-full 
h-1 
rounded-xl
transition-all
duration-700
`;

const HeaderContainer = tw.div`
w-full 
absolute 
top-0 
py-8 
flex 
justify-center
z-[69]
transition-all 
duration-500
`;

const Header = tw.header`
xl:w-[65%]
lg:w-[75%]
w-[90%]
flex-between
`;

const LinksList = tw.ul`
flex 
font-light 
uppercase 
2xl:gap-x-8
gap-x-4
`;

const navLinks = [
  { label: "home", url: "/" },
  { label: "about", url: "/about" },
  { label: "services", url: "/services" },
  { label: "projects", url: "/projects" },
  { label: "blogs", url: "/blogs" },
  { label: "contact", url: "/contact" },
];
