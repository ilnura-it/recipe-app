
import { useEffect, useState } from 'react';
import { ImSearch } from "react-icons/im";
import  RecipeComponent from './RecipeComponent'
import MealTypes from './MealTypes';
import './App.css';
import ScrollButton from './ScrollButton';

function App() {

  const [mySearch, setMySearch] = useState('')
  const [myRecipe, setMyRecipe] = useState([])
  const [wordSearch, setWordSearch] = useState('apple')
  const [mealType, setMealType] = useState([])

const MY_ID = "f7029f09"
const MY_KEY = "c58bcba4e88212950ccf75ddc725f822"

useEffect (() => {
  const fetchData = async () => {
  const response  = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSearch}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipe(data.hits)
  setMealType(data.hits)
}
fetchData();
}, [wordSearch]);

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSearch(mySearch)
}

const handleMealsType = (mealType) => {
  const newMeals = myRecipe.filter(item => 
   item.recipe.mealType[0] === mealType)
      setMealType(newMeals)
}

return (
    <div className="App">
       <div className="container">
        <video autoPlay muted loop>
           <source src={'https://files.cdn.thinkific.com/file_uploads/397660/attachments/90d/92f/4be/food.mp4'} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input type="text" className='search' placeholder='Search' onChange={myRecipeSearch} value={mySearch}/>
        </form>

      <div className='container'>
        <button className='btn' onClick = {finalSearch}><ImSearch /></button>
      </div>
      
      </div>
      <div className='container'>
        <MealTypes handleMealsType = {handleMealsType} mealType={mealType}/>
      </div>

       <div  className='recipe-container'>
       {mealType.map(element => (
       <RecipeComponent key = {Math.random()} 
       label = {element.recipe.label} 
       calories = {element.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed()} 
       image = {element.recipe.image} 
       ingredients = {element.recipe.ingredientLines} 
       dishType = {element.recipe.dishType}
       fats = {element.recipe.totalNutrients.FAT.quantity.toFixed()}
       proteins = {element.recipe.totalNutrients.PROCNT.quantity.toFixed()}
       carbs = {element.recipe.totalNutrients.CHOCDF.quantity.toFixed()}
       complRecipe = {element.recipe.url}
       
       />
       ))}
      </div>
      <ScrollButton/>
    </div>
  );
}

export default App;
