import NavigationBar from "./NavigationBar";
import Hero from "./Hero";
import TrustedClients from "./TrustedClients";
import OverallContent from "./overall-content/OverallContent";
import Footer from "./Footer"

import { useState } from "react";


function Page(){
    const [toggleTheme,setToggleTheme]=useState(false);
    
    function ToggleTheme(toggle){
        setToggleTheme(toggle)
    }

    return(
        <div>
            <NavigationBar ToggleTheme={ToggleTheme} />
            <Hero toggleTheme={toggleTheme} />
            <TrustedClients toggleTheme={toggleTheme} />
            <OverallContent toggleTheme={toggleTheme} />
        </div>
    )
}

export default Page;