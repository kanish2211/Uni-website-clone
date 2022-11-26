import React from "react";
import ApplyNow from "./applyNow";
import Declaration from "./declaration";

const Footer=()=>{
    return(
        <div className="footer grid grid-cols-3 gap-8">
            <div className="ml-4"><ApplyNow/></div>
            
            <div className="w-72  mr-0 ml-auto"><Declaration/></div>

        </div>
    )
}

export default Footer