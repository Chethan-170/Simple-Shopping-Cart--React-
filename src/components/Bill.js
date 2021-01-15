export const Bill = (props) => {
    const {label,quantity,price} = props.item
    return (           
        <tr>
            <td>{label}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
        </tr>        
     );
}