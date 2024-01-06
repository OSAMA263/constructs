import tw from "tailwind-styled-components";
import { IoMdCart } from "react-icons/io";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  // hoverd link
  const [hoverdLink, setHoverdLink] = useState("/");
  const { pathname } = useLocation();

  return (
    <Header>
      logo
      <Nav>
        <ul className="flex gap-x-8 font-light uppercase">
          {navLinks.map(({ label, url }) => (
            <li className="relative" key={label}>
              <NavLink
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
                  className="underline"
                ></motion.div>
              )}
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
text-white
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
