import "./styles/index.css";

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
