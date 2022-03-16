import Item from './Item.js';

const List = (props) => {
    return (
      <ul>
        {props.list.map((item) => (
          <Item 
            key={item._id} 
            item={item} 
            removeItem={props.removeItem} 
            toggleItemComplete={props.toggleItemComplete}
          />
        ))}
      </ul>
    );
}

export default List