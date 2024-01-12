"use client";
import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [width, setWidth] = useState<unknown>(undefined);

  const handleWindowSizeChange = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (!width) {
    return { isMobile: undefined, isTablet: undefined };
  }

  return { isMobile: Number(width) <= 768 };
};

export default useIsMobile;
