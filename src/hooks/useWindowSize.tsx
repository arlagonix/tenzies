import { useState, useEffect } from "react";

interface IWindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    function resizeHandler() {
      console.log("window resized");
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return windowSize;
}
