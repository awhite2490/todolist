import React from 'react';
import './App.css';

const App = () => {
  const[list, setList] = React.useState([]);
  const[nextID, setNextID] = React.useState(0);

    const addItem = (event) => {
      const newItem = {itemID: nextID,text:event};
      var newItems = list.slice();
      newItems.push(newItem);
      setList(newItems);
      const newNextID = nextID + 1;
      setNextID(newNextID);
    }

    return (
      <div>
        <h1>ToDo</h1>
        <AddItem addItem={addItem} />
        <List list={list}/>
      </div>
    );
}

const AddItem = (props) => {
const [newItem, setNewItem] = React.useState('');

  const addItem = () => {
    props.addItem(newItem);
    setNewItem('');
  }

  const handleChange =(event) => {
    setNewItem(event.target.value);
  }

  return (
    <div>
      <input type="text" value={newItem} onChange={handleChange}></input>
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.itemID} item={item} />
      ))}
    </ul>
  );
}

const Item = (props) => (
  <li>{props.item.text}<input type="checkbox"></input><button>Remove</button></li>
)

export default App