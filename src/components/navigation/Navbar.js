import { NavLink } from "react-router-dom"
const style = {
    witdth:"60%",
    margin: "5% 0 1%",
    padding:"1em",
    textDecoration:"none",
    color: "green",
    backgroundColor: "yellow",
    fontWeight: "bold", 
    verticalAlign: "center"
}
export const Navbar = () => {
    return (
        <div>
         
           <NavLink
            activeStyle ={{
                fontWeight: "bolder",
                color: "red"
            }}
            exact 
            style= {style}
            to="/"


        >Home</NavLink>

<NavLink
            activeStyle ={{
                fontWeight: "bolder",
                color: "red"
            }}
            exact 
            style= {style}
            to="/smoothies"


        >Smoothies</NavLink>

<NavLink
            activeStyle ={{
                fontWeight: "bolder",
                color: "red"
            }}
            exact 
            style= {style}
            to="/smoothies/new"


        >New Smoothies</NavLink>


<NavLink
            activeStyle ={{
                fontWeight: "bolder",
                color: "red"
            }}
            exact 
            style= {style}
            to="/about"


        >About</NavLink>
            
        </div>
    )
}
