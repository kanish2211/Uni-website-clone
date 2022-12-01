import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const ApplyMobileView=()=>{
    return(
        <div className="applyMobileView z-10 flex" >
            <div className="applyMobileViewButton text-left  h-14 rounded-lg mx-5  z-40 flex ">
                <p className="mx-9 float-left my-4">Apply Now</p>
                <div className="text-black absolute right-16 mt-4 mb-4"> <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
            
        </div>
    )
}

export default ApplyMobileView