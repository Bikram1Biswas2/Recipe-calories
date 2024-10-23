
const SingleRecipe = ({recipe}) => {
    return (
       <div className="">
         <div className=" bg-base-100 border-2 p-3 rounded-2xl">
        <figure>
          <img className="w-full h-[300px] rounded-2xl"
            src={recipe.recipe_image}
            alt="Recipe" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{recipe.recipe_name}</h2>
          <p className="text-gray-500">{recipe.short_description}</p>
          <hr />
          <h5 className="font-semibold text-xl">Ingredients:{recipe.ingredients.length}</h5>
          <ul className="list-disc text-gray-500">
            {
                recipe.ingredients.map((ingredient,idx) => <li key={idx}>{ingredient}</li>)
            }
          </ul>
          <div className="card-actions mt-3">
            <button className="btn bg-green-400 rounded-3xl px-8 ">Want to Cook</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default SingleRecipe;