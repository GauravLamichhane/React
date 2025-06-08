import List from "./List";
function App() {
  const fruits = [
    {id:1,name:"Banana",calories:105},
    {id:2,name:"Apple",calories:95},
    {id:3,name:"Pineappel",calories:37},
  ];

  const vegetables = [
    {id:4,name:"Potatoes",calories:105},
    {id:5,name:"Celery",calories:95},
    {id:6,name:"Carrots",calories:37},
  ];
  return(<>
  {fruits.length > 0 ? <List items = {fruits} category = {"Fruits"}/> : null} 
  {vegetables.length > 0 ? <List items = {vegetables} category = {"Vegetables"}/>: null}
  </>
);
}

export default App
