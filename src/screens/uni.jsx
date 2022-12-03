import React,{useContext} from "react";
import "../App.css"
import ApplyMobileView from "../components/applyMobileView";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollContext from "../context/scrollContext";
import WindowSizeContext from "../context/windowSizeContext";
import CashOut from "../pages/cashOut";
import Emi from "../pages/emi";
import FreeText from "../pages/freeText";
import InControl from "../pages/inControl";
import InfoText from "../pages/infoText";
import InstantCredit from "../pages/instantCredit";
import Rewards from "../pages/rewards";
import Split2 from "../pages/split2";
import Split3 from "../pages/split3";
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
        <div>
Pellentesque habitant morbi tristique senectus et netus. Lacus sed turpis tincidunt id aliquet. At ultrices mi tempus imperdiet nulla. Nibh nisl condimentum id venenatis. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Morbi leo urna molestie at elementum eu facilisis sed odio. Vel facilisis volutpat est velit egestas dui. Sagittis orci a scelerisque purus semper eget duis. Vivamus arcu felis bibendum ut. Risus quis varius quam quisque id diam vel quam elementum. Neque laoreet suspendisse interdum consectetur. Justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet. Aliquam sem et tortor consequat id porta.

Ac ut consequat semper viverra nam libero. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. In ante metus dictum at. Amet nisl purus in mollis nunc sed id. Arcu bibendum at varius vel pharetra vel turpis. Cras ornare arcu dui vivamus arcu felis bibendum. Sit amet tellus cras adipiscing enim eu turpis. Ipsum consequat nisl vel pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Amet facilisis magna etiam tempor orci eu lobortis. Pellentesque habitant morbi tristique senectus. Id faucibus nisl tincidunt eget nullam. Volutpat consequat mauris nunc congue nisi vitae suscipit. Nibh mauris cursus mattis molestie a iaculis at. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Egestas fringilla phasellus faucibus scelerisque eleifend.

Porttitor rhoncus dolor purus non. Faucibus turpis in eu mi. Leo duis ut diam quam nulla porttitor massa id. Massa ultricies mi quis hendrerit dolor magna eget. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Rhoncus urna neque viverra justo nec ultrices. At augue eget arcu dictum varius duis at. Ac tincidunt vitae semper quis lectus. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Turpis cursus in hac habitasse platea dictumst.

Ac placerat vestibulum lectus mauris ultrices eros in. Condimentum mattis pellentesque id nibh. Sodales ut etiam sit amet nisl purus. Massa tincidunt nunc pulvinar sapien et. Ut porttitor leo a diam sollicitudin tempor id. Fermentum dui faucibus in ornare quam viverra orci sagittis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Habitant morbi tristique senectus et netus et malesuada. Gravida cum sociis natoque penatibus et magnis. Quisque sagittis purus sit amet volutpat.

Integer vitae justo eget magna fermentum iaculis eu non. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Amet porttitor eget dolor morbi. Purus viverra accumsan in nisl. Dui ut ornare lectus sit amet est. Arcu risus quis varius quam quisque id diam. Sagittis aliquam malesuada bibendum arcu vitae elementum. Varius vel pharetra vel turpis nunc eget lorem dolor. Et ultrices neque ornare aenean euismod elementum. Dui id ornare arcu odio. Facilisi nullam vehicula ipsum a arcu. Neque vitae tempus quam pellentesque nec nam. Morbi tristique senectus et netus et malesuada fames ac. Leo in vitae turpis massa sed elementum. Nisl purus in mollis nunc sed id semper. Nunc mi ipsum faucibus vitae.

Nullam vehicula ipsum a arcu cursus vitae. Nunc sed blandit libero volutpat sed cras ornare. A condimentum vitae sapien pellentesque habitant morbi. Augue lacus viverra vitae congue eu. Amet consectetur adipiscing elit duis tristique sollicitudin. Metus vulputate eu scelerisque felis imperdiet. Lacinia at quis risus sed vulputate. Suscipit tellus mauris a diam. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Dictumst quisque sagittis purus sit. Orci ac auctor augue mauris augue neque. Nec ultrices dui sapien eget mi proin sed libero. Laoreet id donec ultrices tincidunt arcu non sodales. Habitasse platea dictumst quisque sagittis. Turpis massa sed elementum tempus egestas sed. Sit amet cursus sit amet dictum sit amet.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Tincidunt ornare massa eget egestas purus viverra. Semper auctor neque vitae tempus quam pellentesque nec nam. Nulla pharetra diam sit amet nisl. Vitae congue eu consequat ac felis. Ut ornare lectus sit amet est placerat. Scelerisque viverra mauris in aliquam sem fringilla. In hendrerit gravida rutrum quisque non tellus orci ac auctor. A diam sollicitudin tempor id eu nisl nunc. Vivamus at augue eget arcu dictum varius duis at. Justo eget magna fermentum iaculis eu. Nam libero justo laoreet sit amet cursus sit. Odio eu feugiat pretium nibh. Erat pellentesque adipiscing commodo elit at imperdiet. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Et netus et malesuada fames ac turpis. Amet nisl suscipit adipiscing bibendum est. Leo urna molestie at elementum eu facilisis sed odio. Tincidunt tortor aliquam nulla facilisi cras.
</div>
</div>
    {windowWidth>770?(scrollPosition>=360?<Footer/>:""):(<ApplyMobileView/>)}
    
      

    </div>
    
    
  )
}

export default Uni