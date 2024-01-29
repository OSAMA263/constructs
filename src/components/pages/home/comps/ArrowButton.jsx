import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

export default function ArrowButton() {
  return (
    <button className="lime-button overflow-hidden">
      <motion.div variants={arrowAnimation}>
        <div className="p-2 -rotate-45 text-2xl">
          <IoArrowForward />
        </div>
      </motion.div>
    </button>
  );
}
const arrowAnimation = {
  animate: {
    x: ["0%", "110%", "-110%", "0%"],
    y: ["0%", "-110%", "110%", "0%"],
    opacity: [1, 0, 0, 0, 1],
  },
  whileHover: {
    x: ["0%", "110%", "-110%", "0%"],
    y: ["0%", "-110%", "110%", "0%"],
    opacity: [1, 0, 0, 0, 1],
  },
};
