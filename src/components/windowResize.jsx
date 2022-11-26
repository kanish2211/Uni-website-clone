import React,{useEffect, useState} from "react";
import WindowSizeContext from "../context/windowSizeContext";
const WindowResize=(props)=>{
    const [windowSize, setWindowSize] = useState({innerWidth:1535,innerHeight:714});
  

  useEffect(() => {
    function handleWindowResize() {
      const size=getWindowSize()
      setWindowSize(size);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  console.log(windowSize.innerHeight);
  return(
    <WindowSizeContext.Provider value={windowSize}>
      {props.children}
    </WindowSizeContext.Provider>
  )

}

export default WindowResize