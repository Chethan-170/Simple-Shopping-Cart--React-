import React from 'react';
import {Bill} from './Bill';
import {GrandTotal} from './GrandTotal'

class Billing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card  mr-3 ml-3">
                <div className="card-header text-center bg-warning pt-2" style={{fontSize:20}}> 
                Bill
                </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="300">Item</th>
                            <th width="300">Quantity</th>
                            <th width="300">Price</th>
                            <th width="300">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(product => {return <Bill key={product.id} item={product}/>})}
                        {
                            (this.props.items.length === 0) && <tr><td colSpan="4" className="text-center">No Items Bought</td></tr>                      
                        }
                        <GrandTotal items={this.props.items.filter(product=>(product.quantity > 0))}/>
                    </tbody>
                  </table>
                </div>
                </div>
            </div>

        );
    }
}
 
export default Billing;