import {useState} from  'react';


export const SmoothiesFilter = ({ handleSearch, handleSort}) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(bool => !bool)
      handleSort(!checked)
    };
    

    const handleFilterChange = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div>  
            <input style={{border: "solid 2px", height: "2em", width: "25em", margin: "10px"}}type="text" placeholder="Type a smoothie name..."
                onChange={handleFilterChange} /> <br/>
            Sort <input type="checkbox" checked={checked ? "checked" : ""} onChange={handleChange} />
        </div>
    )
}

