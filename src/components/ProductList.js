import {Component} from 'react'
import Product from './Product'
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            this.props.products.map(product => <Product key={product.id} product={product} handleAdd={this.props.handleAdd} handleDelete={this.props.handleDelete}/>)
        )
    }
}
 
export default ProductList;