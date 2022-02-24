import React from 'react';
import './App.css';
import Item from './Item.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem() {
    const curritems = this.state.items.slice()
    const newItem = <Item />
    this.setState({items: curritems.concat(newItem)})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addItem()}>Add Item</button>
        {this.state.items}
      </div>
    );
  }
}

export default App