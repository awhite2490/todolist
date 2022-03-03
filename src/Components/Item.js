import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <input type="textbox" value={this.props.value}/>
                <button onClick={() => this.props.removeItem(this.props.value)}>Delete</button>
            </div>
        )
    }
}

export default Item