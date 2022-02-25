import React from "react";

class Item extends React.Component {
    render() {
        return (
            <li>
                <input type="textbox" value={this.props.value} />
                <button onClick={() => this.props.addItem()}>+</button>
                {this.props.value > 0 && 
                    <button onClick={() => this.props.removeItem(this.props.value)}>-</button>
                }
            </li>
        )
    }
}

export default Item