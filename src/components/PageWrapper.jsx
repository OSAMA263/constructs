import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import tw from "tailwind-styled-components";

export default function PageWrapper(props) {
  const { children, title, description, href, bg } = props;

  return (
    <motion.main
      initial={{ opacity: 1, delay: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={bg + " relative overflow-x-hidden"}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={href} />
      </Helmet>
      <SlidingDivs />
      {children}
    </motion.main>
  );
}

const SlidingDivs = () => {
  const parentAnimation = {
    initial: { display: "block" },
    animate: {
      display: "none",
      transition: { when: "afterChildren" },
    },
  };

  const fadeOutWhiteDiv = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 0.2, delay: 0.7 } },
  };

  const slideAnimation = {
    initial: { x: 0 },
    animate: (custom) => ({
      x: custom,
      transition: { duration: 1, delay: 0.5 },
    }),
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={parentAnimation}
      className="absolute z-[669] left-0 top-0 h-full w-screen"
    >
      {/* FADE OUT WHITE BG */}
      <motion.div
        variants={fadeOutWhiteDiv}
        className="absolute h-full w-screen bg-white"
      ></motion.div>
      {/* BLACK BG SLIDES */}
      <Slide variants={slideAnimation} custom={"-100%"}></Slide>
      <Slide
        className="right-0"
        variants={slideAnimation}
        custom={"100%"}
      ></Slide>
    </motion.div>
  );
};

const Slide = tw(motion.div)`
bg-black
w-1/2
top-0
h-full
absolute
z-10
`;
