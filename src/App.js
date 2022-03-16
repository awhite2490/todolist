import React, { useEffect } from 'react';
import './App.css';
import List from './Components/List.js';
import ItemInput from './Components/ItemInput.js';

const App = () => {
  const api = 'http://localhost:3001/items/'; 

  const[list, setList] = React.useState([])

  useEffect(() => {
    fetch(api)
    .then(response => response.json())
    .then(
      (result) => {
        setList(result);
      },
      (error) => {
        console.log(error);
      }
    );
  })

    const addItem = (event) => {
      const response = fetch(api, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: `{"text":"${event}", "isComplete":"false"}`
      });
    }

    const removeItem = (item) => {
      const response = fetch(api + item._id, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

      })
    }

    const toggleItemComplete = (item) => {
      item.isComplete = !item.isComplete;
    }

    const test = () => {
      console.log(JSON.stringify(list));
    }

    return (
      <div className="App">
        <h1>To-Do</h1>
        <ItemInput addItem={addItem} />
        <List 
          list={list} 
          removeItem={removeItem} 
          toggleItemComplete={toggleItemComplete}
        />
        <hr />
      </div>
    );
}


export default App