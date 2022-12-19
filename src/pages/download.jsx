import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Download = () => {
  return (
    <div className="gradientbg">
      <div className="  py-20 text-left  md:grid md:grid-cols-2 ">
        <p className="font-semibold mx-14 text-xl sm:text-2xl mb-6 md:text-3xl xl:text-4xl">
          Download now to get started
        </p>
        <div className="grid grid-cols-2 gap-4  md:-ml-20 ml-10  ">
          <div className="downloadButton rounded-2xl w-40 sm:w-56">
            <div className=" flex ">
              <FontAwesomeIcon className=" mx-2 my-1.5 " icon={faAppleAlt} />
              <p className=" mx-5 my-1 ">App Store</p>
            </div>
          </div>

          <div className="downloadButton rounded-2xl w-40 sm:w-56  ">
            <div className=" flex ">
              <FontAwesomeIcon className=" mx-2 my-1.5 " icon={faAppleAlt} />
              <p className=" mx-5 my-1 ">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
