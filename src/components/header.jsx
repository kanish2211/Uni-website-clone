import React from "react";
import "../App.css"
import uniLogo from "../assets/Uni_Cards_Logo.jpg"


const Header=()=>{
    return(
        <div className="header">
            <div><img src={uniLogo} className="h-6 mt-0 ml-0"/></div>
            <div className="headerInnerdiv ">
                <div>kanishhhh</div>
                <div>kanishhhhh</div>
            </div>
        </div>
    )
}

export default Header