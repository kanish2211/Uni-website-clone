import React,{useContext} from "react";
import WindowSizeContext from "../context/windowSizeContext";
const Split2=()=>{
    const window=useContext(WindowSizeContext)
    const width=window.innerWidth
    const height=window.innerHeight
    const neededHeight=height-50
    const screenHeight={
        height:`${neededHeight}px`
    }
    return(
        <div>
        {width>=770?
        <div className="bg-black grid grid-cols-2 gap-1 pt-20" style={screenHeight}>
           <div className="mt-12 lg:mt-2 xl:-mt-2 lg:ml-12 xl:ml-132" > <video className="w-80 lg:w-96  " muted="" playsinline="" disablepictureinpicture="" ><source src="https://www.uni.cards/videos/pay_half.mp4" type="video/mp4"/><source src="https://www.uni.cards/videos/pay_half.webm" type="video/webm"/></video></div>
            
            <div className="text-white mt-10  ">
                <div className="-ml-12">
                    <p className="onebytwogradient text-4xl">Uni Pay 1/2 Card</p>
                    <p className="spliThreeText">Smart Payments,</p>
                    <p className="spliThreeText">Delightful Rewards.</p>
                </div>
                
                <div className="mt-8 -ml-12">
                    <p className="spliThreeSubText"><span className="font-semibold text-white">Split your spends into 2.</span> Or,</p>
                    <p className="spliThreeSubText">pay in 1 month & get<span className="font-semibold text-white">1.2% rewards </span> </p>
                    <div className="knowMoreButton rounded-3xl mt-16 bg-black">Know More</div>
                </div>
                
            </div>
        </div>
        :
        <div>
            <div className="bg-black  " style={screenHeight}>
                <div className=" flex mx-auto" > <video className="w-60 ml-44 " muted="" playsinline="" disablepictureinpicture="" ><source src="https://www.uni.cards/videos/pay_half.mp4" type="video/mp4"/><source src="https://www.uni.cards/videos/pay_half.webm" type="video/webm"/></video></div>
            
                <div className="text-white mt-8  ">
                    <div className="ml-5">
                        <p className="onebytwogradient text-xl">Uni Pay 1/2 Card</p>
                        <p className=" text-3xl">Smart Payments,</p>
                        <p className="text-3xl">Delightful Rewards.</p>
                    </div>
                
                    <div className="mt-8 ml-5">
                        <p className="spliThreeSubTextMobile"><span className="font-semibold text-white">Split your spends into 2.</span> Or,</p>
                        <p className="spliThreeSubTextMobile">pay in 1 month & get<span className="font-semibold text-white"> 1.2% rewards </span> </p>
                        <div className="knowMoreButtonMobile rounded-3xl mt-10 bg-black">Know More</div>
                    </div>
                </div>    
            </div>
        </div>
        }</div>
        
    )
}

export default Split2