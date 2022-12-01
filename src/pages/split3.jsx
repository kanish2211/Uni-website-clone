import React,{useContext} from "react";
import WindowSizeContext from "../context/windowSizeContext";
const Split3=()=>{
    const window=useContext(WindowSizeContext)
    const width=window.innerWidth
    const height=window.innerHeight
    const neededHeight=height-90
    const screenHeight={
        height:`${neededHeight}px`
    }
    return(
        <div>{width>=770?
        <div className="bg-black grid grid-cols-2 gap-1" style={screenHeight}>
           <div className="mt-20"> <video className="w-80 " muted="" playsinline="" disablepictureinpicture="" ><source src="https://www.uni.cards/videos/one-third.mp4" type="video/mp4"/><source src="https://www.uni.cards/videos/one-third.webm" type="video/webm"/></video></div>
            
            <div className="text-white">
                <p>Uni Pay 1/3rd Card</p>
                <p>With Great Flexiblity,</p>
                <p>Comes Great Power.</p>
                <p>Split your spends into <span>3 parts over 3 months</span>at</p>
                <p>no extra charges. And, <span>get 1% rewards </span> if you pay in 1 month</p>
                <div className="knowMoreButton rounded-3xl bg-black">Know More</div>
            </div>
        </div>
        :
        ""
        }</div>
        
    )
}

export default Split3