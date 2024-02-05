import { motion } from "framer-motion";

export default function Fallback() {
  return (
    <div className="absolute top-0 z-[6996] text-white bg-black h-screen flex justify-center items-center w-screen">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ offsetPosition: 4 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <img src="logo-white.svg" className="w-60" alt="logo" />
      </motion.span>
    </div>
  );
}
