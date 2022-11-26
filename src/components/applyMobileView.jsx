import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ApplyMobileView=()=>{
    return(
        <div className="applyMobileView z-10 flex" >
            <div className="applyMobileViewButton text-left  h-14 rounded-lg mx-5  z-40 flex ">
                <p className="mx-9 float-left my-4">Apply Now</p>
                <div className="text-black"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></div>
            </div>
            
        </div>
    )
}

export default ApplyMobileView