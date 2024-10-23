import WantToCook from "./WantToCook/WantToCook";


const Sidebar = ({wantCook}) => {
    return (
        <div className="w-1/3 border-2 rounded-2xl">
            <WantToCook wantCook={wantCook}></WantToCook>
        </div>
    );
};

export default Sidebar;