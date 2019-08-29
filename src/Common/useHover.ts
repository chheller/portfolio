import { useEffect, useRef, useState, RefObject } from "react";

export const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const [isHovered, setHovered] = useState(false);
  const hoverRef = useRef<T>(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = hoverRef.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseOut);
      return () => {
        node.removeEventListener("mouseenter", handleMouseOver);
        node.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [hoverRef.current]);

  return [hoverRef, isHovered];
};
