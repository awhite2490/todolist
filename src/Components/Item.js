import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <input type="textbox" value={this.props.text} />
                <button onClick={() => this.props.removeItem(this.props.value)}>Delete</button>
                <button onClick={() => this.props.changeItem(this.props.value, this.props.text)}>Save Item</button>
            </div>
        )
    }
}

export default Item