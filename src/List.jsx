import PropTypes from 'prop-types'

function List(props){
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map(item => <li key={item.id}>
    {item.name}: {item.calories}
  </li>)


  return (<>
  <h2 className="list-category">{category}</h2>
  <ol className="list-items">{listItems}</ol>
  </>);
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  name: PropTypes.string  })) 
}


List.defaultProps = {
category: "Categoryy"
}
export default List