import React from 'react';

const ItemInput = (props) => {
    const [newItem, setNewItem] = React.useState('');
    
      const addItem = () => {
        if(newItem !== '') {
            props.addItem(newItem);
            setNewItem('');
        }
      }
    
      const handleChange =(event) => {
        setNewItem(event.target.value);
      }
    
      return (
        <div>
          <input 
            type="text" 
            value={newItem} 
            onChange={handleChange}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
      )
    }

export default ItemInput