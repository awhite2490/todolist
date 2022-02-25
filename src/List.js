import React from "react";
import Item from "./Item.js";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextIndex: 0,
            items:[]
        }
    }
    
    addItem() {
        const curritems = this.state.items.slice()
        const newItem = <Item 
                          addItem={() => this.addItem()}
                          removeItem={(i) => this.removeItem(i)}
                          value= {this.state.nextIndex}
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

    render() {
        if (this.state.nextIndex === 0) {
            this.addItem();
        }
        return (
            <div>
                {this.state.items}
            </div>
        )
    }
}

export default List;