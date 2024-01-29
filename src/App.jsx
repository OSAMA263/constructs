import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Fallback from "./components/shared/Fallback";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";

export default function App() {
  const location = useLocation();
  // try animate presence with page navigate to see if the bug still there
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Fallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
              <Route path="about" element={<About />} />
              {/* <Route path="servcies" element={<Servcies />} > */}
              {/* <Route path="residentail" element={<rResidentail />} /> */}
              {/* <Route path="commercail" element={<Commercail />} /> */}
              {/* <Route path="renovation" element={<Renovation />} /> */}
              {/* </Route> */}
              {/* <Route path="projects" element={<Projects />} > */}
              {/* <Route path="mall" element={<Mall />} /> */}
              {/* <Route path="modern-revonation" element={<ModernRenovation />} /> */}
              {/* <Route path="historical-revonation" element={<HistoricalRenovation />} /> */}
              {/* <Route path="resort" element={<Resort />} /> */}
              {/* <Route path="condo" element={<Condo />} /> */}
              {/* <Route path="exquisite-property" element={<ExquisiteProperty />} /> */}
              {/* </Route> */}
              {/* <Route path="blog" element={<Blog />} > */}
              {/* <Route path="choosing-the-right-contractor" element={<Blog1 />} /> */}
              {/* <Route path="creating-a-safe-construction-site" element={<Blog2 />} /> */}
              {/* <Route path="sustainable-building-practices" element={<Blog3 />} /> */}
              {/* </Route> */}
              {/* <Route path="shop" element={<Shop />} > */}
              {/* <Route path="product" element={<Product />}/ > */}
              {/* </Route> */}
              {/* <Route path="contact" element={<Contact />} /> */}
         
          </Routes>
        </Suspense>
      </AnimatePresence>
      {/* <Footer/> */}
    </>
  );
}

const About =lazy(()=>import('./components/pages/about/About'))