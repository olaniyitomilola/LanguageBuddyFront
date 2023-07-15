import { useEffect, useRef, useState } from "react"
import Timeline from "./Timeline"
import Conversations from "./Conversations"
export const HomePage = (props)=>{

    const [activeNav, setActiveNav] = useState('timeline')



    function handleNav (active){
        setActiveNav(active)
    }
    return(
            <div className="homePage">
                <HomeHeader/>

                <div className="homeBody">
                    <div className="navigator">
                        <button onClick={()=>handleNav('timeline')} className={activeNav === 'timeline'? 'active' : "" }>Timeline</button>
                        <button onClick={()=> handleNav('conversations')} className={activeNav === 'conversations'? 'active' : ""} >Conversations</button>
                    </div>
                    <div className="displayPanel">
                        {activeNav === "timeline"? <Timeline/> : activeNav === "conversations"? <Conversations/> : "Loading"}
                    </div>
                </div>
                
               
              

            </div>

    )
}
function homepagePanel(props){
   
    return(

        <div className="homepagePanel">

        </div>
    )
  

}


function HomeHeader(props){
    return(
        <div className="topOfPage">
                <div id="logo">LANGUAGEBuddy</div>
                <div className="homeAdiheader">

                    <input placeholder= "Find Friend" className="searchUser" type="search" />
                    <div className="profileIllus">
                        <div className="profImg"></div>
                        <div className="profi">Profile</div>
                    </div>
                </div>
            </div>
    )
}


