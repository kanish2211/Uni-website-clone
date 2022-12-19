import React, { useContext } from "react";
import WindowSizeContext from "../context/windowSizeContext";
const ThreeGrid = () => {
  const window = useContext(WindowSizeContext);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const neededHeight = height - 10;
  const screenHeight = {
    height: `${neededHeight}px`,
  };
  return (
    <div className="bg-black pt-4 pb-4">
      {width >= 768 ? (
        <div className="bg-black mx-12 grid grid-cols-3 gap-2 lg:gap-10 xl:gap-28 h-auto pt-4 pb-4  ">
          <div className="ml-3 mr-3">
            <img
              className="w-28 "
              src="https://www.uni.cards/images/redesign/whatsapp_bubble.webp"
            />
            <div className="">
              <p className="text-2xl mt-3 text-white font-semibold">
                Help, just a WhatsApp away. Anytime, Anyday.
              </p>
              <p className="text-gray-400 text-lg mt-6">
                During hectic work hours. On lazy sunday mornings. In the thick
                of night. Anytime.
              </p>
            </div>
          </div>
          <div className="ml-3 mr-3">
            <img
              className="w-28 "
              src="https://www.uni.cards/images/redesign/rupee_bubble.webp"
            />
            <div className="">
              <p className="text-2xl mt-3 text-white font-semibold">
                No hidden charges, no last minute surprises.
              </p>
              <p className="text-gray-400 text-lg mt-6">
                100% money back guarantee if a charge is applied without your
                knowledge.
              </p>
            </div>
          </div>
          <div className="ml-3 mr-3">
            <img
              className="w-28 "
              src="https://www.uni.cards/images/redesign/antivirus_bubble.webp"
            />
            <div className="">
              <p className="text-2xl mt-3 text-white font-semibold">
                Super secure. Because we care about your money.
              </p>
              <img
                className="mt-6"
                src="https://www.uni.cards/images/pcidss_cert.svg"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-black h-max ">
            <div className="ml-3 mt-12 mb-5 grid grid-cols-2 gap-3 mr-3">
              <img
                className="w-20 mt-10 ml-auto mr-16 "
                src="https://www.uni.cards/images/redesign/whatsapp_bubble.webp"
              />
              <div className="">
                <p className="text-xl mt-3 text-white font-semibold">
                  Help, just a WhatsApp away. Anytime, Anyday.
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  During hectic work hours. On lazy sunday mornings. In the
                  thick of night. Anytime.
                </p>
              </div>
            </div>
            <div className="ml-3 mt-12 mb-5 grid grid-cols-2 gap-3 mr-3">
              <div className="">
                <p className="text-xl mt-3 text-white font-semibold">
                  No hidden charges, no last minute surprises.
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  100% money back guarantee if a charge is applied without your
                  knowledge.
                </p>
              </div>
              <img
                className="w-20 mt-10 mr-auto ml-16 "
                src="https://www.uni.cards/images/redesign/rupee_bubble.webp"
              />
            </div>
            <div className="ml-3 mt-12 mb-5 grid grid-cols-2 gap-3 mr-3">
              <img
                className="w-20 mt-10 ml-auto mr-16 "
                src="https://www.uni.cards/images/redesign/antivirus_bubble.webp"
              />
              <div className="">
                <p className="text-xl mt-3 text-white font-semibold">
                  Super secure. Because we care about your money.
                </p>
                <img
                  className="mt-3"
                  src="https://www.uni.cards/images/pcidss_cert.svg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeGrid;
