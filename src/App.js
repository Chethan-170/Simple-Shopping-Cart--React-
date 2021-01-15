import React from 'react';
import Billing from './components/Billing';
import {Row,Column} from './components/layouts/Layouts'
import {NavBar} from './components/NavBar'
import ProductList from './components/ProductList'
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.state = { 
      products : [
        {
          id : 1,
          label : "Mobile",
          quantity : 0,
          price : 1000
        },
        {
          id : 2,
          label : "Laptops",
          quantity : 0,
          price : 55000
        },
        {
          id : 3,
          label : "PenDrives",
          quantity : 0,
          price : 8000
        }
      ]
    }
  }
  handleAdd = (id) =>{
    const products = this.state.products.map(product=>{
      if(product.id === id){
        product.quantity = product.quantity + 1
      }
      return product
    })
    this.setState({products})
  }
  handleDelete = (id) =>{
    const products = this.state.products.filter(product => product.id !== id);
    this.setState({products})
  }
  handleReset(){
    const products = this.state.products.map(product=>{
      product.quantity = 0;
      return product
    })
    this.setState({products})
  }
  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalProducts={this.state.products.filter(product=>product.quantity!==0).length}/>
        <Row>
          <Column className="col-12">
            <div className="card  mr-3 ml-3">
              <div className="card-header text-center bg-warning pt-2" style={{fontSize:20}}> 
                Product List
                <button className="btn btn-md btn-outline-danger float-right" onClick={this.handleReset}>Reset</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th style={{width:60}}> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ProductList products={this.state.products} handleAdd={this.handleAdd} handleDelete={this.handleDelete}/>
                    </tbody>
                  </table>                  
                </div>
                {(this.state.products.length ===0) && <p className="text-center mt-4">Oops , No Products Found..!</p>}
              </div>
            </div>
          </Column>
        </Row>
        <Row>
          <Column className="col-12">
            <Billing items={this.state.products.filter(product => (product.quantity > 0 ))}/>
           </Column>
        </Row>
      </React.Fragment>
    );
  }
}
 
export default MyApp;