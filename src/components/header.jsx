import React, { useContext } from "react";
import "../App.css";
import uniLogo from "../assets/Uni_Cards_Logo.jpg";
import WindowSizeContext from "../context/windowSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  console.log("width", width);
  return (
    <div className="header overflow-x-visible md:overflow-x-hidden">
      <div>
        <img src={uniLogo} className="h-7 -mt-2  lg:ml-12 xl:ml-24 -ml-2" />
      </div>
      <div className="headerInnerdiv ">
        {width >= 768 ? (
          <div className="grid grid-cols-2 text-right ">
            <p className="text-right absolute right-52  ">Pay 1/2 card</p>
            <p className="text-right absolute right-10 ">Pay 1/3 card</p>
          </div>
        ) : (
          <div className="absolute right-7">
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
