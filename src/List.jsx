function List(){
  

    // fruits.sort((a,b) => b.name.localeCompare(a.name));//Desc alphabetical order
    // const lowcaloriefoods = fruits.filter(fruit => fruit.calories > 50);

    // fruits.sort((a,b)=> a.calories - b.calories);
  const listitems = fruits.map(fruit => <li>{fruit.name}: {fruit.calories}</li>);//it is equivaklent to fruits.map(function(fruit){
  // return <li>{fruit}</li>;})

  return (<ol>{listitems}</ol>);
}
export default List