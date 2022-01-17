import {useState, useEffect} from "react"
import { SmoothiesList } from "../components/smoothies/SmoothiesList"
import { SmoothiesFilter } from "../components/smoothies/SmoothiesFilter"


export const SmoothiesContainer = () => {
    const [smoothies, setSmoothies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch (" http://localhost:3001/smoothies")
            const data = await response.json()
          setSmoothies(data)  
        } catch (error) {
            alert(error)
        }
        }
        fetchData()
           
    }, [])
    return (
        <div>
            <SmoothiesList smoothies = {smoothies}/>
            <SmoothiesFilter/>
        </div>
    )
}
