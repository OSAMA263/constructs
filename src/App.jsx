import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Fallback from "./components/Fallback";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Fallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/renovation" element={<Renovation />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

const NotFound = lazy(() => import("./components/pages/404/NotFound"));
const About = lazy(() => import("./components/pages/about/About"));
const Services = lazy(() => import("./components/pages/services/Services"));
const Projects = lazy(() => import("./components/pages/projects/Projects"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const Blog = lazy(() => import("./components/pages/blog/Blog"));
const Team = lazy(() => import("./components/pages/team/Team"));
const Commercial = lazy(() => import("./components/pages/services/Commercial"));
const Renovation = lazy(() => import("./components/pages/services/Renovation"));
const Residential = lazy(() =>
  import("./components/pages/services/Residential")
);
