import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";

const Visa = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  return (
    <div className="lg:mt-28 ml-6 mt-36">
      {width >= 768 ? (
        <div className="grid grid-cols-2">
          <div className="lg:ml-28 ml-10">
            <p className="lg:text-4xl text-xl font-semibold lg:leading-normal ">
              Split your payments,
            </p>
            <p className="lg:text-4xl text-xl font-semibold lg:leading-normal">
              anywhere and everywhere.
            </p>
            <p className="text-gray-400 text-xl lg:text-4xl font-semibold lg:leading-normal">
              Accepted at 99.9% of
            </p>
            <p className="text-gray-400 text-xl  lg:text-4xl font-semibold lg:leading-normal">
              merchants
            </p>

            <div className="mt-10 lg:w-36 w-20">
              <img src="https://www.uni.cards/images/backed_by_visa.svg" />
            </div>
          </div>
          <div className="mt-10">
            <img
              className="vert-move ml-6 lg:w-80 w-52 "
              src="https://www.uni.cards/images/redesign/semi-circle.svg"
            />
            <img
              className="lg:-mt-40 lg:w-96 -mt-32 w-72 absolute "
              src="https://www.uni.cards/images/redesign/places.webp"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className=" ml-6">
            <p className=" text-xl font-semibold  ">Split your payments,</p>
            <p className=" text-xl font-semibold ">anywhere and everywhere.</p>
            <p className="text-gray-400 text-xl  font-semibold ">
              Accepted at 99.9% of
            </p>
            <p className="text-gray-400 text-xl   font-semibold ">merchants</p>

            <div className="mt-10  w-20">
              <img src="https://www.uni.cards/images/backed_by_visa.svg" />
            </div>
          </div>
          <div className="mt-20 w-72 mx-auto mb-10">
            <img
              className="vert-move ml-6 w-52"
              src="https://www.uni.cards/images/redesign/semi-circle.svg"
            />
            <img
              className="-mt-32 w-72 absolute "
              src="https://www.uni.cards/images/redesign/places.webp"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Visa;
