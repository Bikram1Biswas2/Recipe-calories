import RecipeCards from "./RecipeCards/RecipeCards";
import Sidebar from "./Sidebar/Sidebar";


const RecipeContainer = ({handleWantCook,wantCook}) => {
    return (
        <div className="flex gap-2">
            <RecipeCards handleWantCook={handleWantCook}></RecipeCards>
            <Sidebar wantCook={wantCook}></Sidebar>
        </div>
    );
};

export default RecipeContainer;