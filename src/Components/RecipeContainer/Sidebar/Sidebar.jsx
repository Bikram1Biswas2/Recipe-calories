import CurrentCooking from "./CurrentCooking/CurrentCooking";
import WantToCook from "./WantToCook/WantToCook";


const Sidebar = ({wantCook,handlePrepareCook,currentCook}) => {
    return (
        <div className="w-1/3 border-2 rounded-2xl">
            <WantToCook wantCook={wantCook} handlePrepareCook={handlePrepareCook}></WantToCook>
       
            <CurrentCooking currentCook={currentCook}></CurrentCooking>
        </div>
    );
};

export default Sidebar;