import React from "react";
import HeroTile from "./HeroTile";


function HeroesDisplay({heroes}){

    const heroObjects = heroes.map((hero) =>{
        return(
            <HeroTile 
           image = {hero.img}
           name = {hero.name}
            icon = {hero.icon}
           />    
        )
    })
    return(
        <div>{heroObjects}</div>
    )
}
export default  HeroesDisplay