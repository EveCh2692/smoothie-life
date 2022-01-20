import {useState} from 'react'
export const SmoothieForm = () => {
    const [type, setType] = useState("");
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = e => {
        e.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <lable htmlFor="type">Type</lable>
                <input type ="text" name="type" id="type"/>
                <lable htmlFor="name">Name</lable>
                <input type ="text" name="name" id="name"/>
                <lable htmlFor="image">Image Url</lable>
                <input type ="text" name="image" id="image"/>
                <lable htmlFor="ingredients">Ingredients</lable>
                <input type ="text" name="ingredients" id="ingredients"/>
            </form>
        </div>
    )
}
