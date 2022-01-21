import {useState} from 'react'
import {useHistory} from 'react-router-dom'
export const SmoothieForm = () => {
    const history = useHistory()
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = e => {
        e.preventDefault()
      if  ([type, name, image, ingredients].some(val => val.trim() === "")){
             alert("Please fill out all the fields, thank you!!")
             return null
        }
        const newSmoothies = {type, name, image, ingredients}

        fetch("http://localhost:3001/smoothies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSmoothies)
        })
        setType("")
        setName("")
        setImage("")
        setIngredients("")
        history.push("/smoothies")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">Type</label>
                <input onChange={e => setType(e.target.value)} type ="text" name="type" id="type" value={type} required/> <br /><br />
                <label htmlFor="name">Name</label>
                <input onChange={e => setName(e.target.value)} type ="text" name="name" id="name" value={name} required/>  <br /><br />
                <label htmlFor="image">Image Url</label>
                <input onChange={e => setImage(e.target.value)} type ="text" name="image" id="image" value={image} required/> <br /><br />
                <label htmlFor="ingredients">Ingredients</label>
                <input onChange={e => setIngredients(e.target.value)} type ="text" name="ingredients" id="ingredients" value={ingredients} />  <br /><br />
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}
