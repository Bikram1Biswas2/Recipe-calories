import RecipeCards from "./RecipeCards/RecipeCards";
import Sidebar from "./Sidebar/Sidebar";


const RecipeContainer = () => {
    return (
        <div className="flex gap-2">
            <RecipeCards></RecipeCards>
            <Sidebar></Sidebar>
        </div>
    );
};

export default RecipeContainer;