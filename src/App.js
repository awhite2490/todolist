import React from 'react';
import './App.css';
import Item from "./Components/Item.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      nextIndex:0,
    }
  }

  changeText(index, text) {
    alert(index);
    alert(text);
  }

  changeItem(i, newValue) {
    alert(i);
    alert(newValue);
    /*const currItems = this.state.items.slice()
    const newItem = <Item
                      removeItem={(i) => this.removeItem(i)}
                      value= {newValue}
                      key={i}
                      changeItem={(z,n) => this.changeItem(z, n)}
                      />
    currItems[i] = newItem;
    this.setState({items: currItems});*/
  }

  addItem() {
    const curritems = this.state.items.slice()
    const newItem = <Item 
                      removeItem={(i) => this.removeItem(i)}
                      value={this.state.nextIndex}
                      changeItem={(z,n) => this.changeItem(z, n)}
                      text=''
                    />
    var newIndex = this.state.nextIndex;
    newIndex++;
    this.setState({items:curritems.concat(newItem), nextIndex: newIndex});
  }

  removeItem(i) {
    const curritems = this.state.items.slice()
    delete curritems[i];
    this.setState({items: curritems});
  }

  save() {
    var foo = JSON.stringify(this.state);
    alert(foo);
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <button onClick={() => this.addItem()}>Add New Item</button>
        <button onClick={() => this.save()}>Save List</button>
        <hr/>
        {this.state.items}
      </div>
    );
  }
}

export default App