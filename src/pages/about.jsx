import React from "react";
import uniLogo from "../assets/Uni_Cards_Logo.jpg"

const About =()=>{
    return(
        <div className="bg-black md:text-lg text-base text-gray-400 py-10 h-screen  ">
            <div><img src={uniLogo} className="h-7 mt-4 ml-3 md:ml-8 xl:ml-10 "/></div>
            <div className="text-xs lg:text-base text-gray-400 mt-4">
                <p className="ml-5 md:ml-10 xl:ml-12">Indiqube Sigma No.3/B, Nexus Koramangala 3rd</p>
                <p className="ml-5 md:ml-10 xl:ml-12">Block SBI Colony, Koramangala, Bengaluru,</p>
                <p className="ml-5 md:ml-10 xl:ml-12">Karnataka 560034</p>
                
                <p className="ml-5 md:ml-10 xl:ml-12 mt-6">Contact Us: 080 68216821</p>
                <p className="ml-5 md:ml-10 xl:ml-12">Email: care@uni.club</p>
            </div>
            <div className="gradientbg line  "></div>
            <div className="grid grid-cols-5  w-8/12 ml-auto mr-auto mt-14">
                <p className="ml-auto mr-auto">Instagram</p>
                <p className="ml-auto mr-auto">LinkedIn</p>
                <p className="ml-auto mr-auto">Twitter</p>
                <p className="ml-auto mr-auto">Facebook</p>
                <p className="ml-auto mr-auto">Carrers</p>

            </div>
            <div className="grid grid-cols-3 w-5/12 ml-auto mr-auto mt-10 ">
                <p className="ml-auto mr-auto">Uni T&Cs </p>
                <p className="ml-auto mr-auto">Prepaid Card T&Cs </p>
                <p className="ml-auto mr-auto">Lending Partner TnCs</p>
                

            </div>
            
        </div>
    )
}

export default About