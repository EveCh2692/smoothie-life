
export const SmoothiesFilter = ({handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="Type a smoothie name..." 
             onChange={(e) => handleSearch(e.target.value)}/>
       </div>
    )
    }