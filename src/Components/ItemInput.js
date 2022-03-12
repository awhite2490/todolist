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

      const handleKeyPress = (event) => {
        if (event.charCode === 13) {
          addItem();
        }
      }
    
      return (
        <div className="Item-Input" >
          <input 
            type="text" 
            value={newItem} 
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="Item-Input-TextBox"
          />
          <button 
            onClick={addItem}
            className= "Item-Input-Button"
          >
            Add Item
          </button>
        </div>
      )
    }

export default ItemInput