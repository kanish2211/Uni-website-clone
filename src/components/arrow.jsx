import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;

  return (
    <div>
      {width >= 768 ? (
        <div className="gradientArrow w-32 h-32 rounded-full mt-36 mx-auto">
          <FontAwesomeIcon
            className=" mt-10 h-12 font-light"
            icon={faArrowDownLong}
          />
        </div>
      ) : (
        <div className="gradientArrow w-24 h-24 rounded-full mt-14 ">
          <FontAwesomeIcon
            className=" mt-8 mx-9 h-8 font-light"
            icon={faArrowDownLong}
          />
        </div>
      )}
    </div>
  );
};

export default Arrow;
