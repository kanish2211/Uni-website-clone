import React from "react";
import "./App.css"
import ScrollPosition from "./components/scroll";


import WindowResize from "./components/windowResize";
import Uni from "./screens/uni";



const App=()=>{
  
  return(
    <WindowResize>
      <ScrollPosition>
        <Uni/>
      </ScrollPosition>
      
      
    </WindowResize>
    
  )
}

export default App