import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";
const Split3 = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const neededHeight = height - 80;
  const screenHeight = {
    height: `${neededHeight}px`,
  };
  return (
    <div>
      {width >= 768 ? (
        <div className="bg-black grid grid-cols-2 gap-1" style={screenHeight}>
          <div className="mt-20 lg:mt-10 xl:mt-2 lg:ml-12 xl:ml-120">
            {" "}
            <video
              className="w-80 lg:w-auto  "
              muted=""
              playsinline=""
              disablepictureinpicture=""
            >
              <source
                src="https://www.uni.cards/videos/one-third.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.uni.cards/videos/one-third.webm"
                type="video/webm"
              />
            </video>
          </div>

          <div className="text-white mt-10  ">
            <div className="-ml-12">
              <p className="onebythreegradient text-4xl">Uni Pay 1/3rd Card</p>
              <p className="spliThreeText">With Great Flexiblity,</p>
              <p className="spliThreeText">Comes Great Power.</p>
            </div>

            <div className="mt-8 -ml-12">
              <p className="spliThreeSubText">
                Split your spends into{" "}
                <span className="font-semibold text-white">
                  3 parts over 3 months
                </span>{" "}
                at
              </p>
              <p className="spliThreeSubText">
                no extra charges. And,{" "}
                <span className="font-semibold text-white">
                  get 1% rewards{" "}
                </span>{" "}
                if you pay in 1 month
              </p>
              <div className="knowMoreButton rounded-3xl mt-16 bg-black">
                Know More
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-black -mt-20" style={screenHeight}>
            <div className=" flex  justify-center ">
              {" "}
              <video
                className="w-60 "
                muted=""
                playsinline=""
                disablepictureinpicture=""
              >
                <source
                  src="https://www.uni.cards/videos/one-third.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://www.uni.cards/videos/one-third.webm"
                  type="video/webm"
                />
              </video>
            </div>

            <div className="text-white mt-8  ">
              <div className="ml-5">
                <p className="onebythreegradient text-xl">Uni Pay 1/3rd Card</p>
                <p className=" text-3xl">With Great Flexiblity,</p>
                <p className="text-3xl">Comes Great Power.</p>
              </div>

              <div className="mt-8 ml-5">
                <p className="spliThreeSubTextMobile">
                  Split your spends into{" "}
                  <span className="font-semibold text-white">
                    3 parts over 3 months
                  </span>{" "}
                  at
                </p>
                <p className="spliThreeSubTextMobile">
                  no extra charges. And,{" "}
                  <span className="font-semibold text-white">
                    get 1% rewards{" "}
                  </span>{" "}
                  if you pay in 1 month
                </p>
                <div className="knowMoreButtonMobile rounded-3xl mt-10 bg-black">
                  Know More
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Split3;
