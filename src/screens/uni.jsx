import React,{useContext} from "react";
import "../App.css"
import ApplyMobileView from "../components/applyMobileView";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollContext from "../context/scrollContext";
import WindowSizeContext from "../context/windowSizeContext";
import About from "../pages/about";
import CashOut from "../pages/cashOut";
import Download from "../pages/download";
import Emi from "../pages/emi";
import FreeText from "../pages/freeText";
import InControl from "../pages/inControl";
import InfoText from "../pages/infoText";
import InstantCredit from "../pages/instantCredit";
import Rewards from "../pages/rewards";
import SBM from "../pages/sbm";
import Security from "../pages/security";
import Split2 from "../pages/split2";
import Split3 from "../pages/split3";
import ThreeGrid from "../pages/threeGrid";
import UniIntro from "../pages/uniIntro";
import Visa from "../pages/visa";



const Uni=()=>{
  const windowSize=useContext(WindowSizeContext)
  const windowHeight=windowSize.innerHeight;
  const windowWidth=windowSize.innerWidth;
  const heightNeeded=windowHeight-1;
  
  
  const mainGridStyle={
    height:`${heightNeeded}px`

    
  }
  const scrollPosition=useContext(ScrollContext);

  return(
    
      <div className="mainGrid " style={mainGridStyle} >
      <div><Header/></div>
      
      <div className="bodyPart">
        <UniIntro/>
        <Split3/>
        <Split2/>
        <InfoText/>
        <Visa/>
        <Rewards/>
        <Emi/>
        <CashOut/>
        <FreeText/>
        <InstantCredit/>
        <InControl/>
        <ThreeGrid/>
        <SBM/>
        <Download/>
        <Security/>
        <About/>
        
</div>
    {windowWidth>770?(scrollPosition>=360?<Footer/>:""):(<ApplyMobileView/>)}
    
      

    </div>
    
    
  )
}

export default Uni