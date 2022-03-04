const Item = (props) => (
    <li>
        {props.item.text}
        <input type="checkbox"></input>
        <button>Remove</button>
    </li>
)

export default Item