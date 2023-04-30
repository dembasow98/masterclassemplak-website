import React from "react";
//For particle.js usage
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particles from "./../../assets/particles/particles.json";

const Design =() =>{
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, [])

    return (
        <div className="absolute -z-1 w-fit">
            <Particles id="tsparticles" 
              init={particlesInit} loaded={particlesLoaded} 
                options={particles}
            />
        </div>
    )
}

export default Design;
                
            
            