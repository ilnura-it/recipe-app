function MealTypes ({handleMealsType}){
   return(
      <div className="buttons">
         
         <button className="type-btn"  onClick = {() => handleMealsType ('breakfast') }>Breakfast</button>
         <button  className="type-btn" onClick = {() => handleMealsType ('lunch/dinner')}>Lunch/Dinner</button>
         <button  className="type-btn" onClick = {() => handleMealsType ('snack')}>Snack</button>
         <button  className="type-btn"  onClick = {() => handleMealsType ('teatime')}>Teatime</button>
      </div>
   )
}

export default MealTypes;