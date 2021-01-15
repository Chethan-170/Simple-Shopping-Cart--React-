export const GrandTotal = (props) => {
    return ( 
        <tr>
            <td colSpan="3" className="text-center">GrandTotal</td>
            <td>{grandTotal(props.items)}</td>
        </tr>
    );
} 
function grandTotal(items){
    let grandTotal = Number(0);
    let total = Number(0);
    total= items.map(i=>{
        const {quantity,price} = i;
        return Number(quantity * price)
    })
    total.forEach(t=>{
        grandTotal += t;
    })
    return grandTotal;
}