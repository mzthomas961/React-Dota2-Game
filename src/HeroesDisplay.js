import React from "react";
import HeroTile from "./HeroTile";


function HeroesDisplay({heroes}){

    const heroObjects = heroes.map((hero) =>{
        return(
            <HeroTile 
           image = {hero.url_large_portrait}
           name = {hero.localized_name}
           />    
        )
    })
    return(
        <div>{heroObjects}</div>
    )
}
export default  HeroesDisplay