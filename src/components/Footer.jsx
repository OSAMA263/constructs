import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import LayoutSection from "./shared/LayoutSection";
import SlideUpElement from "./shared/SlideUpElement";

export default function Footer() {
  return (
    <div className=" text-white bg-black">
      <LayoutSection styles="!pb-8">
        <SlideUpElement offsetY="20%">
          <Container>
            <Link to="/" className="w-fit h-fit sm:block hidden" aria-label="home page">
              <img src="logo-white.svg" className="w-52" alt="log" />
            </Link>
            {LINKS_DATA.map((column, i) => (
              <ListLinks key={i + "column"}>
                {column.map(({ label, url }) => (
                  <li
                    className="overflow-hidden [&>div]:hover:-translate-y-6 w-fit"
                    key={label}
                  >
                    <div className="relative transition-all duration-500">
                      <Link to={url}>{label}</Link>
                      <Link
                        className="absolute block text-lime min-w-max"
                        to={url}
                      >
                        {label}
                      </Link>
                    </div>
                  </li>
                ))}
              </ListLinks>
            ))}
          </Container>
        </SlideUpElement>
        {/* LARGE LOGO WITH CONTACT SOCIALMEDIA */}
        <SlideUpElement offsetY="20%">
          <div className="flex flex-col items-center pb-10 mt-14 border-b gap-y-10">
            <img src="logo-white.svg" className="w-[60%]" alt="logo" />
            <div className="space-x-6 [&_a:hover]:text-lime">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/"
              >
                Youtube
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
              >
                Facebook
              </a>
            </div>
          </div>
          <h1 className="mt-4">
            Built By <span className="text-lime">Osama Khaled</span>
          </h1>
        </SlideUpElement>
      </LayoutSection>
    </div>
  );
}

const Container = tw.footer`
grid 
sm:grid-cols-3
grid-cols-2
text-white
`;

const ListLinks = tw.ul`
text-center
space-y-4
flex 
flex-col 
items-center
`;

const LINKS_DATA = [
  [
    { label: "home", url: "/" },
    { label: "about", url: "about" },
    { label: "services", url: "services" },
    { label: "service single", url: "services/residential" },
  ],
  [
    { label: "team", url: "team" },
    { label: "blogs", url: "blogs" },
    { label: "projects", url: "projects" },
    { label: "contact", url: "contact" },
  ],
];
