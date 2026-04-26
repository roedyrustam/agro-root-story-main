import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LiquidImage({ src, alt, className }: LiquidImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        filter: [
          "url(#distort-subtle)",
          "url(#distort-liquid)",
          "url(#distort-subtle)"
        ],
        transition: { duration: 0.8, ease: "easeInOut" }
      });
    } else {
      controls.start({
        filter: "url(#distort-subtle)",
        transition: { duration: 0.4 }
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={controls}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
