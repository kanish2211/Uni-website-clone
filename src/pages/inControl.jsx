import React,{useContext} from "react";
import WindowSizeContext from "../context/windowSizeContext";
const InControl=()=>{
    const window=useContext(WindowSizeContext)
    const width=window.innerWidth
    const height=window.innerHeight
    const neededHeight=height-10
    const screenHeight={
        height:`${neededHeight}px`
    }
    return(
        <div className="bg-black">
        {width>=770?
        <div className="bg-black grid grid-cols-2 gap-1 h-auto pt-4 pb-4  " >
            
            <div className="cusyomWidthInstantCredit text-white xl:mt-72 xl:-ml-2 xl:mr-32 -ml-2 sm:-ml-6 lg:-ml-6   lg:mt-60 md:mt-16 sm:mt-2 mt-0">
            
                <div className="ml-14">
                    <p className="text-4xl ">With Uni,</p>
                    <p className="onebythreegradient text-4xl ">you're always in control</p>

                </div>
                
                <div className="mt-8 ml-14">
                    <p className="text-gray-400 text-lg">Set your own payment limits. Choose how and where you spend. Lock and unlock your card.</p>
                    <p className="text-gray-400 text-lg">All right from the app.</p>
                </div>
                
            </div>
           <div className="mt-6 lg:mt-12 xl:mt-14 lg:ml-6 xl:ml-14 xl:w-96 ml-24 lg:w-80 sm:w-76 w-56" > <img  src="https://www.uni.cards/images/redesign/app_screen_1.webp"/></div>

        </div>
        :
        <div>
            <div className="bg-black h-max " >
            
                <div className="text-white mt-0  ">
                    <div className="ml-6 pt-16">
                        <p className="text-xl ">With Uni,</p>
                        <p className="onebythreegradient text-xl ">you're always in control</p>
                       
                    </div>
                    <div className="mt-4 text-gray-400 ml-6">
                        <p className="text-xs">Set your own payment limits. Choose how and where you spend. Lock and unlock your card.</p>
                        <p className="text-xs">All right from the app.</p>
                </div>
                   
                </div>  
                <div className=" w-96 mx-auto" > <img className="instantCreditImageMobile" src="https://www.uni.cards/images/redesign/app_screen_1.webp"/></div>

            </div>
        </div>
        }</div>
        
    )
}

export default InControl