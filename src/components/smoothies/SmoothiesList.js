import { SmoothieCard } from "./SmoothieCard"
import './Smoothie.css'



export const SmoothiesList = ({ smoothies }) => {



    return (
        <div className="smoothies-container">
            {smoothies.map(smoothie => <SmoothieCard key={smoothie.id} smoothie={smoothie} />)}
        </div> 
    )
}
