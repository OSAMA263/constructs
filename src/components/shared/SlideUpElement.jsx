import { motion } from "framer-motion";

export default function SlideUpElement(props) {
  const { styles, children, ind = 1, offsetY = 0, offsetX = 0 } = props;
  return (
    <motion.div
      className={styles ?? ""}
      custom={{ ...{ ind, offsetY, offsetX } }}
      {...SlideAnimation}
    >
      {children}
    </motion.div>
  );
}

const SlideAnimation = {
  initial: ({ offsetY, offsetX }) => ({ opacity: 0, y: offsetY, x: offsetX }),
  whileInView: ({ ind }) => ({
    opacity: 1,
    y: "0%",
    x: "0%",
    transition: {
      y: { duration: 0.9, delay: 0.1 * ind },
      x: { duration: 0.9, delay: 0.5 * ind },
      opacity: { duration: 0.9, delay: 0.3 * ind },
    },
  }),
  viewport: { once: true },
};
