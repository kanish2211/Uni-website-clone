import React,{useContext} from "react";
import Arrow from "../components/arrow";

const InfoText=()=>{
    
    return(
        <div className=" text-2xl  ml-8 mr-6 mt-10 text-left md:text-center md:text-4xl font-semibold">
            <p>Split your payments, anywhere and everywhere.</p>
            <p><span className="uniGreen"> Earn the best rewards.</span> Enjoy round the clock <span className="uniGreen">WhatsApp support.</span> It</p>
            <p>takes just 5 minutes to get your card, and it's <span className="onebythreegradientLong">lifetime free:</span> no</p>
            <p>joining fee, no annual charges.</p>
            <Arrow/>
        </div>
    )
}


export default InfoText