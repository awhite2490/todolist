import React from 'react'

const Item = (props) => {
    const [isComplete, setIsComplete] = React.useState(props.item.isComplete)

    const removeItem = () => {
        props.removeItem(props.item)
    }

    const handleCheck = () => {
        setIsComplete(!isComplete);
        props.toggleItemComplete(props.item);
    }

    return (   
        <li>
            {props.item.text}
            <input 
                type="checkbox" 
                checked={isComplete}
                onChange={handleCheck}
            />
            <button onClick={removeItem}>Remove</button>
        </li>
    );
}

export default Item