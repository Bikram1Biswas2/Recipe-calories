

const CookItem = ({cookItem,idx}) => {
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
      </tr>
    
    </tbody>
</table>
</div>
        </div>
    );
};

export default CookItem;