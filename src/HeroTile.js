import React from "react";

function HeroTile({image, name,icon}){
    console.log(image)
    return (
        <div>
            <img src = {icon}/>
            <h1>{name}</h1>
        </div>
    )

}
export default HeroTile