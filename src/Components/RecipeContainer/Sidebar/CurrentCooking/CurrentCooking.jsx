
const CurrentCooking = ({currentCook}) => {
    return (
        <div className="mt-3 border-t-2">
            <h2 className="text-center font-bold">Current Cooking:{currentCook.length} </h2>

            <table className="table">
               <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>

        <tbody>
        {
                currentCook.map((cookItem,idx) => <tr key={idx} className="bg-base-200">
                <th>{idx+1}</th>
                <td>{cookItem.recipe_name}</td>
                <td>{cookItem.preparing_time}</td>
                <td>{cookItem.calories}</td>
               <td> </td>
              </tr>)
            }
        </tbody>
                </table>
        </div>
    );
};

export default CurrentCooking;