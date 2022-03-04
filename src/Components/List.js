import Item from './Item.js';

const List = (props) => {
    return (
      <ul>
        {props.list.map((item) => (
          <Item key={item.itemID} item={item} />
        ))}
      </ul>
    );
}

export default List