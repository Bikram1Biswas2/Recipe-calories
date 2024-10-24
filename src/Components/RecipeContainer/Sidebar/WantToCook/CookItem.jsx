

const CookItem = ({cookItem,idx,handlePrepareCook}) => {
    return (
        <div>
            <div className="overflow-x-auto">
  
    {/* head */}
    <table className="table">
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>{idx+1}</th>
        <td>{cookItem.recipe_name}</td>
        <td>{cookItem.preparing_time}</td>
        <td>{cookItem.calories}</td>
       <td> <button onClick={()=>handlePrepareCook(cookItem.recipe_id)} className="btn bg-green-400 rounded-3xl  font-semibold">Preparing</button></td>
      </tr>
    
    </tbody>
</table>
</div>
        </div>
    );
};

export default CookItem;