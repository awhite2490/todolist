import React from 'react';
import './App.css';
import List from './List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: <List />
    }
  }

  render() {
    return (
      <div>
        <h1>test</h1>
        {this.state.list}
      </div>
    );
  }
}

export default App