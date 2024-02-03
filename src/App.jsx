import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Fallback from "./components/Fallback";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import SingleService from "./components/pages/services/single/SingleService";
// ?section with w and padding

// image zoom in on scroll

export default function App() {
  const location = useLocation();
  // try animate presence with page navigate to see if the bug still there
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Fallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />}>
              {/* <Route path="residentail" element={<rResidentail />} /> */}
              {/* <Route path="commercail" element={<Commercail />} /> */}
              {/* <Route path="renovation" element={<Renovation />} /> */}
            </Route>
            <Route path="projects" element={<Projects />}>
              {/* <Route path="mall" element={<Mall />} /> */}
              {/* <Route path="modern-revonation" element={<ModernRenovation />} /> */}
              {/* <Route path="historical-revonation" element={<HistoricalRenovation />} /> */}
              {/* <Route path="resort" element={<Resort />} /> */}
              {/* <Route path="condo" element={<Condo />} /> */}
              {/* <Route path="exquisite-property" element={<ExquisiteProperty />} /> */}
            </Route>
            <Route path="blog" element={<Blog />}>
              {/* <Route path="choosing-the-right-contractor" element={<Blog1 />} /> */}
              {/* <Route path="creating-a-safe-construction-site" element={<Blog2 />} /> */}
              {/* <Route path="sustainable-building-practices" element={<Blog3 />} /> */}
            </Route>
            <Route path="team" element={<Team />} />
            <Route path="single-service" element={<SingleService />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

const About = lazy(() => import("./components/pages/about/About"));
const Services = lazy(() => import("./components/pages/services/Services"));
const Projects = lazy(() => import("./components/pages/projects/Projects"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const Blog = lazy(() => import("./components/pages/blog/Blog"));
const Team = lazy(() => import("./components/pages/team/Team"));
