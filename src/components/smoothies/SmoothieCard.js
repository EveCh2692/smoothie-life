import './Smoothie.css'
import { useState, useEffect } from "react"


export const SmoothieCard = ({smoothie}) => {
    const [clickFlip, setClickFlip] = useState(false);
    const [clickLike, setClickLike] = useState(0);
  

    return (
        <div className="smoothie-card"> 
        
        
    
    <h3>{smoothie.name}</h3>
    <img
    src={window.location.origin+smoothie.image}
    onClick={() => setClickFlip(bool => !bool)}
    />
    {!clickFlip? <h4> {smoothie.type}</h4>:
    <h5>{smoothie.ingredients}</h5>}
    
            
        </div>
    )
}
