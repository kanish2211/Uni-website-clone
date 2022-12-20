import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";
import ApplyNow from "../components/applyNow";
import Declaration from "../components/declaration";
const UniIntro = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const neededHeight = height - 90;
  console.debug("wnbbidth", width);
  const screenHeight = {
    height: `${neededHeight}px`,
  };
  return (
    <div className="bg-black">
      {width >= 768 ? (
        <div className="bg-black  -mt-2   " style={screenHeight}>
          <div className="ml-8 lg:ml-20 xl:ml-32 absolute textSize  mt-8 ">
            <h1 className="text-white lineH  ">India's Credit </h1>
            <h1 className="text-white lineH  ">Revolution is here.</h1>
            <h1 className="onebythreegradient -mt-2 font-semibold  ">
              Pay 1/3rd.
            </h1>
            <h1 className="text-white -mt-2  lineH  ">Anywhere.</h1>
          </div>
          <img
            className=" vert-move absolute right-0 mt-16  lg:right-16 xl:right-24"
            width={"440px"}
            src="https://www.uni.cards/images/redesign/card_asset.webp"
          />
          <div className="absolute top-96 ml-8 lg:ml-20 xl:ml-32">
            <ApplyNow />
            <div className="w-96 mt-3">
              <Declaration color="#63656b" />
            </div>
          </div>
        </div>
      ) : (
        <div className=" -mt-2 grid grid-cols-2" style={screenHeight}>
          <div className="ml-6 w-full mt-56 textSizeMobile">
            <h1 className="text-white  ">India's Credit </h1>
            <h1 className="text-white ">revolution is here.</h1>
            <h1 className="onebythreegradient">Pay 1/3rd.</h1>
            <h1 className="text-white ">Anywhere.</h1>
          </div>
          <img
            className=" vert-move -ml-20 mt-16"
            width={"220px"}
            src="https://www.uni.cards/images/redesign/card_asset.webp"
          />
        </div>
      )}
    </div>
  );
};

export default UniIntro;
