import tw from "tailwind-styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import {  motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  // hoverd link
  const [hoverdLink, setHoverdLink] = useState("/");
  const [linkColor, setLinkColor] = useState("white");
  const { pathname } = useLocation();

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

  return (
    <Header className={linkColor === "white" ? "text-white" : "text-black"}>
      <Link to="/" className="w-60" aria-label="home">
        <img
          src={linkColor === "white" ? "logo-white.svg" : "logo-dark.svg"}
          alt="logo"
        />
      </Link>
      <Nav>
        <ul className="flex font-light uppercase gap-x-8">
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
        </ul>
      </Nav>
    </Header>
  );
}

const Header = tw.header`
w-[60%]
flex-between
absolute
top-0
left-1/2
-translate-x-1/2
py-8
z-[69]
`;

const Nav = tw.nav`
flex
gap-x-8
items-center
`;

const navLinks = [
  { label: "home", url: "/" },
  { label: "about", url: "/about" },
  { label: "services", url: "/services" },
  { label: "projects", url: "/projects" },
  { label: "blogs", url: "/blogs" },
  { label: "contact", url: "/contact" },
];
