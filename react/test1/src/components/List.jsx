import PropTypes from "prop-types"

function List (props) {
   
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) //REVERSE 
    
    // by calories

    // fruits.sort((a,b) => a.calories-b.calories); //Numeric 
    // fruits.sort((a,b) => b.calories-a.calories); //reverse Numeric
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                                  {item.name}-calories: &nbsp;
                                                  <b>{item.calories}</b></li>)
    return(
        <div> 
            <h3 className="list-category">{category}</h3> 
            <ol className="list-items">{listItems}</ol>
        </div>
   );

}

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps= {
    category: "Category",
    items: ""
}
export default List;