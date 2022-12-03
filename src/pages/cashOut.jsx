import React,{useContext} from "react";
import WindowSizeContext from "../context/windowSizeContext";

const CashOut=()=>{
    const window=useContext(WindowSizeContext)
    const width=window.innerWidth
    return(
        <div className="lg:mt-28 ml-6 mt-36 mb-10">
            {width>=770?
            <div className="grid grid-cols-2 ">
                <div className=" ml-auto mr-44">
                    <img className="vert-move  ml-6 lg:w-72 w-48 " src="https://www.nicepng.com/png/full/8-89788_index-of-ress-tice-partage-visuel-ian-light.png"/>
                    <img className="lg:-mt-72 lg:w-96 -mt-56 w-72 absolute " src="https://www.uni.cards/images/redesign/bank.webp"/>
                </div>
                <div className="lg:ml-4 ml-4 mt-8">
                    <p className="lg:text-xl text-xl font-semibold lg:leading-normal uniGreen">Coming Soon!</p>
                    <p className="lg:text-4xl text-xl font-semibold lg:leading-normal ">Cash out to bank accounts</p>
                    <p className="lg:text-4xl text-xl font-semibold lg:leading-normal">with Uni Cash.</p>
                    
                </div>
                

            </div>
            :
            <div>
                <div className=" ml-6">
                    <p className=" text-xl font-semibold uniGreen  ">Coming Soon!</p>
                    <p className=" text-xl font-semibold  ">Cash out to bank</p>
                    <p className=" text-xl font-semibold  ">accounts with Uni</p>
                    <p className=" text-xl font-semibold ">Cash.</p>
                    
                    
                 </div>
                <div className="mt-20 w-72 mx-auto mb-10">
                    <img className="vert-move ml-6 w-52" src="https://www.nicepng.com/png/full/8-89788_index-of-ress-tice-partage-visuel-ian-light.png"/>
                    <img className="-mt-56 w-72 absolute " src="https://www.uni.cards/images/redesign/bank.webp"/>
                </div>
            </div>}
        </div>
    )
}

export default CashOut