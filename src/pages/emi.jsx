import React,{useContext} from "react";
import WindowSizeContext from "../context/windowSizeContext";

const Emi=()=>{
    const window=useContext(WindowSizeContext)
    const width=window.innerWidth
    return(
        <div className="lg:mt-36 ml-6 mt-36">
            {width>=770?
            <div className="grid grid-cols-2">
                <div className="lg:ml-28 ml-10">
                    <p className="lg:text-xl text-xl font-semibold lg:leading-normal uniGreen">Coming Soon!</p>
                    <p className="lg:text-4xl text-xl font-semibold lg:leading-normal ">Take all the time you need</p>
                    <p className="lg:text-4xl text-xl font-semibold lg:leading-normal">with longer EMIs</p>
                    
                    
                </div>
                <div className="mt-24">
                    <img className=" ml-12 lg:w-7/12 w-60 rotate-180 " src="https://www.uni.cards/images/redesign/semi-circle.svg"/>
                    <img className="lg:-mt-72 lg:w-96 -mt-60 w-80 absolute " src="https://www.uni.cards/images/redesign/time.webp"/>
                </div>

            </div>
            :
            <div>
                <div className=" ml-6">
                    <p className=" text-lg font-semibold uniGreen ">Coming Soon!</p>
                    <p className=" text-xl font-semibold  ">Take all the time you need</p>
                    <p className=" text-xl font-semibold ">with longer EMIs</p>
                    
                </div>
                <div className="mt-36 w-72 mx-auto mb-10">
                    <img className=" ml-16 w-52 rotate-180" src="https://www.uni.cards/images/redesign/semi-circle.svg"/>
                    <img className="-mt-56 w-72 absolute " src="https://www.uni.cards/images/redesign/time.webp"/>
                </div>
            </div>}
        </div>
    )
}

export default Emi