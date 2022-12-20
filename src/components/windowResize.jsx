import React, { useEffect, useState } from "react";
import WindowSizeContext from "../context/windowSizeContext";
const WindowResize = (props) => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: 1535,
    innerHeight: 714,
  });
  function handleWindowResize() {
    const size = getWindowSize();
    setWindowSize(size);
  }
  useEffect(() => {
    handleWindowResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {props.children}
    </WindowSizeContext.Provider>
  );
};

export default WindowResize;
