import {useState} from 'react';
let recipe = {
  xyz: 1,
  qwe: 2,
};
let spreadinMe = {
  ...recipe,
  spreaded: true,
};

console.log(recipe);
console.log(spreadinMe);

function Recipes(props) {
  const [recipe,setRecipe] = useState("Veg")
  return (
    <div>
      <button onClick={()=>setRecipe("Veg")}>Veg</button>
      <button onClick={()=>setRecipe("Non Veg")}>Non Veg</button>
      <h1>{recipe}</h1>
    </div>
  );
}

export default Recipes;