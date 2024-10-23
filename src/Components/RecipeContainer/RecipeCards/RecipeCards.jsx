import { useEffect } from "react";
import { useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";


const RecipeCards = () => {

    const [recipes,setRecipes] = useState([])

    useEffect(()=> {
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    },[])


    return (
        <div className="w-2/3 grid md:grid-cols-2 gap-3">
            {
                recipes.map(recipe => <SingleRecipe recipe={recipe} key={recipes.recipe_id}></SingleRecipe>)
            }
        </div>
    );
};

export default RecipeCards;