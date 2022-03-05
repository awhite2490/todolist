import React from 'react'

const Item = (props) => {
    const [isComplete, setIsComplete] = React.useState(props.item.isComplete)
    const [className, setClassName] = React.useState('Item-Label');

    const removeItem = () => {
        props.removeItem(props.item)
    }

    const handleCheck = () => {
        setIsComplete(!isComplete);
        props.toggleItemComplete(props.item);
        if(!isComplete) {
            setClassName('Item-Label-Complete')
        } else {
            setClassName('Item-Label')
        }
    }

    return (   
        <div className = "Item">
            <input 
                type="checkbox" 
                checked={isComplete}
                onChange={handleCheck}
                className="Item-Checkbox"
            />
            <label className={className}>
                {props.item.text}
            </label>
            <button 
                onClick={removeItem}
                className="Item-Remove-Button"
            >
                Remove
            </button>
        </div>
    );
}

export default Item