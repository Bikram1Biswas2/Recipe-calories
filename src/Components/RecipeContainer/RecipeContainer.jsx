import RecipeCards from "./RecipeCards/RecipeCards";
import Sidebar from "./Sidebar/Sidebar";


const RecipeContainer = ({handleWantCook,wantCook,handlePrepareCook,currentCook}) => {
    return (
        <div className="flex gap-2">
            <RecipeCards handleWantCook={handleWantCook}></RecipeCards>
            <Sidebar wantCook={wantCook} currentCook={currentCook}  handlePrepareCook={handlePrepareCook} ></Sidebar>
        </div>
    );
};

export default RecipeContainer;