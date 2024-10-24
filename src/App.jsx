import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import RecipeContainer from "./Components/RecipeContainer/RecipeContainer";
import RecipeHeading from "./Components/RecipeHeading/RecipeHeading";

function App() {
  const [wantCook, setWantCook] = useState([]);
  const [currentCook,setCurrentCook] = useState([])

  const handleWantCook = (recipe) => {
    const alreadyCook = wantCook.find((cook) => cook.recipe_id === recipe.recipe_id);
    if (!alreadyCook) {
      const newCook = [...wantCook, recipe];
      setWantCook(newCook);
    } else {
      alert("Already added");
    }
  };

  const handlePrepareCook = id=> {
      // find which recipes to remove
      const deleteRecipe = wantCook.find(recipe => recipe.recipe_id === id)

      // remove from want to cook Table
      const updatedWantCook = wantCook.filter(recipe =>recipe.recipe_id !==id)
      setWantCook(updatedWantCook)
      setCurrentCook([...currentCook,deleteRecipe])
  }


  return (
    <div className="w-11/12 mx-auto space-y-12 mb-12">
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <RecipeContainer
        wantCook={wantCook}
        currentCook={currentCook}
        handleWantCook={handleWantCook}
        handlePrepareCook={handlePrepareCook}
      ></RecipeContainer>
    </div>
  );
}

export default App;
