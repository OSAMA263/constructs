import tw from "tailwind-styled-components";
import { IoMdCart } from "react-icons/io";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  // hoverd link
  const [hoverdLink, setHoverdLink] = useState("/");
  const [linkColor, setLinkColor] = useState("white");
  const { pathname } = useLocation();

  useEffect(() => {
    setHoverdLink(pathname);
    setLinkColor(pathname === "/" || pathname === "/blog" ? "white" : "black");
  }, [pathname]);

  return (
    <Header className={linkColor === "white" ? "text-white" : "text-black"}>
      logo
      <Nav>
        <ul className="flex gap-x-8 font-light uppercase">
          {navLinks.map(({ label, url }) => (
            <li key={label}>
              <NavLink
                className="relative px-[1px]"
                onMouseEnter={() => setHoverdLink(url)}
                onMouseLeave={() => setHoverdLink(pathname)}
                to={url}
              >
                {label}
                {/* line under link */}
                {hoverdLink === url && (
                  <motion.div
                    layoutId="underline"
                    className={`${
                      linkColor === "white" ? "bg-white" : "bg-black"
                    } h-[1px] w-full absolute`}
                  ></motion.div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <i>
          <IoMdCart />
        </i>
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

`;

const Nav = tw.nav`
flex
gap-x-8
`;

const navLinks = [
  { label: "home", url: "/" },
  { label: "about", url: "/about" },
  { label: "servcies", url: "/servcies" },
  { label: "projects", url: "/projects" },
  { label: "blog", url: "/blog" },
  { label: "shop", url: "/shop" },
  { label: "contact", url: "/contact" },
];
