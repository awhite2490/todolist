import React from 'react';
import './App.css';
import List from './Components/List.js';
import ItemInput from './Components/ItemInput.js';

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
        <ItemInput addItem={addItem} />
        <List list={list}/>
      </div>
    );
}


export default App