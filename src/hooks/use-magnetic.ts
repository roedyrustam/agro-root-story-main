import { useRef, useEffect, useCallback } from "react";

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>() {
  const ref = useRef<T | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Movement intensity
    const strength = 0.3;
    
    ref.current.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0, 0)`;
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);
      
      // Ensure smooth transition back
      node.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
