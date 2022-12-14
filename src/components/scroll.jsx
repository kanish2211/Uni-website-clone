import React, { Children, useState, useEffect } from "react";
import ScrollContext from "../context/scrollContext";

const ScrollPosition = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  
  return (
    <ScrollContext.Provider value={scroll}>
      {props.children}
    </ScrollContext.Provider>
  );
};
export default ScrollPosition;
