import React from "react";
import '../App.css'

const Declaration =({color="white"})=>{
    return(
        <div className=" flex">
<input className="h-3 m-1 mt-3" type={"checkbox"}></input>
<p className="declarationText" style={{color:`${color}`}}>By submitting this information, you agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application</p>
        </div>
    )
}

export default Declaration