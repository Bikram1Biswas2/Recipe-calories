import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import RecipeContainer from "./Components/RecipeContainer/RecipeContainer";
import RecipeHeading from "./Components/RecipeHeading/RecipeHeading";

function App() {
  const [wantCook, setWantCook] = useState([]);

  const handleWantCook = (recipe) => {
    const alreadyCook = wantCook.find((cook) => cook.recipe_id === recipe.recipe_id);
    if (!alreadyCook) {
      const newCook = [...wantCook, recipe];
      setWantCook(newCook);
    } else {
      alert("Already added");
    }
  };

  return (
    <div className="w-11/12 mx-auto space-y-12 mb-12">
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <RecipeContainer
        wantCook={wantCook}
        handleWantCook={handleWantCook}
      ></RecipeContainer>
    </div>
  );
}

export default App;
