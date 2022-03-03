import React from 'react';
import './App.css';
import List from './Components/List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: <List />
    }
  }

  save() {
    var foo = JSON.stringify(this.state);
    alert(foo);
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <button onClick={() => this.save()}>Save List</button>
        <hr/>
        {this.state.list}
      </div>
    );
  }
}

export default App