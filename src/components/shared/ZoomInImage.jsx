import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomInImage({ src,offsetY=0.5 }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`0 ${offsetY}`, "1,0"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="h-full overflow-hidden">
      <motion.img
        src={src}
        style={{ scale: scale }}
        alt="zooming in img"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
