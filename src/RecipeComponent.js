import { AiFillCaretRight } from "react-icons/ai";

function RecipeComponent ({label, calories, image, ingredients, fats, proteins, carbs, dishType, complRecipe}){
   return (
      <div className='recipes'>
      <div>
         <h2>{label}</h2>
         <h3>{dishType}</h3>
      </div>
      <div>
         <img className="tasty" src={image} alt="foodImage" />
     </div>
    
      <ul >
        {ingredients.map(ingredient =>(
           <li key={Math.random()}>< AiFillCaretRight/> {ingredient}</li>
           
        ))} 
      </ul>
      <div>
         <p><a href={complRecipe} target="_blank" rel="noopener noreferrer">See Recipe:</a> </p>
      </div>
      <div className="nutrients" >
         <div className="nutr">
            <h3>{calories} kCal</h3>
         </div>
        
        <div className="nutr">
           <p>Fats: {fats} g.</p>
        <p>Proteins: {proteins} g.</p>
        <p>Carbs: {carbs} g.</p>
        </div>
        
         
      </div>

      </div>
   )
}

export default RecipeComponent;