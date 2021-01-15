import {Component} from 'react'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {id,label,quantity,price}=this.props.product;
        return (  
            <tr>
                <td width="100">{id}</td>
                <td>{label}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td width="200">
                    <button className="btn btn-md btn-primary" onClick={()=>{this.props.handleAdd(id)}}>Buy</button>
                    <button className="btn btn-md btn-warning ml-2" onClick={()=>{this.props.handleDelete(id)}}>Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default Product;