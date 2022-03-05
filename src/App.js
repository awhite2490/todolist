import React from 'react';
import './App.css';
import List from './Components/List.js';
import ItemInput from './Components/ItemInput.js';

const App = () => {
  const[list, setList] = React.useState(
    {
        nextID: 0,
        items: [],
    }
  )

    const addItem = (event) => {
      const newItems = list.items.slice();
      newItems.push({itemID: list.nextID,text:event,isComplete:false});
      const newNextID = list.nextID + 1;
      setList({nextID:newNextID, items:newItems});
    }

    const removeItem = (item) => {
      const newItems = list.items.slice();
      const indexToRemove = newItems.indexOf(item);
      newItems.splice(indexToRemove, 1);
      const newNextID = list.nextID;
      setList({nextID:newNextID, items:newItems});
    }

    const toggleItemComplete = (item) => {
      item.isComplete = !item.isComplete;
    }

    const save = () => {
      /*Eventually this will post to a back-end service to save it*/
      alert(JSON.stringify(list));
    }

    return (
      <div className="App">
        <h1>To-Do</h1>
        <ItemInput addItem={addItem} />
        <hr />
        <List 
          list={list.items} 
          removeItem={removeItem} 
          toggleItemComplete={toggleItemComplete}
        />
        <button 
          onClick={save}
          className="Save-Button"
        >
          Save
        </button>
      </div>
    );
}


export default App