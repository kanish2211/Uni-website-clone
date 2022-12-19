import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";

const Rewards = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  return (
    <div className="lg:mt-28 ml-6 mt-36 mb-10">
      {width >= 768 ? (
        <div className="grid grid-cols-2 ">
          <div className=" ml-auto mr-16">
            <img
              className="vert-move  ml-6 lg:w-72 w-48 "
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Teal_Blue_Circle.png"
            />
            <img
              className="lg:-mt-72 lg:w-96 -mt-56 w-72 absolute "
              src="https://www.uni.cards/images/redesign/reward_points.webp"
            />
          </div>
          <div className="lg:ml-12 ml-4 mt-8">
            <p className="lg:text-4xl text-xl font-semibold lg:leading-normal ">
              Earn rewards every time
            </p>
            <p className="lg:text-4xl text-xl font-semibold lg:leading-normal">
              yoy Pay in Full.
            </p>
            <p className="text-gray-400 text-xl lg:text-4xl font-semibold lg:leading-normal">
              Soon, get up to 5X value on
            </p>
            <p className="text-gray-400 text-xl  lg:text-4xl font-semibold lg:leading-normal">
              Uni Store
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className=" ml-6">
            <p className=" text-xl font-semibold  ">Earn rewards every time</p>
            <p className=" text-xl font-semibold ">yoy Pay in Full.</p>
            <p className="text-gray-400 text-xl  font-semibold ">
              Soon, get up to 5X value on
            </p>
            <p className="text-gray-400 text-xl   font-semibold ">Uni Store</p>
          </div>
          <div className="mt-20 w-72 mx-auto mb-10">
            <img
              className="vert-move ml-6 w-52"
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Teal_Blue_Circle.png"
            />
            <img
              className="-mt-56 w-72 absolute "
              src="https://www.uni.cards/images/redesign/reward_points.webp"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Rewards;
