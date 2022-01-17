import './Smoothie.css'
export const SmoothieCard = ({smoothie}) => {
    return (
        <div className="smoothie-card">
    <h3>{smoothie.name}</h3>
    <img src={window.location.origin+smoothie.url}/>
    <h4> {smoothie.type}</h4>
            
        </div>
    )
}
