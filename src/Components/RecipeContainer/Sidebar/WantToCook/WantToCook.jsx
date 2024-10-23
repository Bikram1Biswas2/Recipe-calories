import CookItem from "./CookItem";

const WantToCook = ({wantCook}) => {
    return (
        <div>
            <h2 className="text-center font-bold">Want to Cook:{wantCook.length}</h2>
            <table className="table">
               <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    </table>
            {
                wantCook.map((cookItem,idx) => <CookItem cookItem={cookItem} idx={idx} key={idx}></CookItem>)
            }
        </div>
    );
};

export default WantToCook;