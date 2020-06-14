import React, { Component } from 'react';
import "./ShoppingCart";


class ShoppingCart extends Component{
    render() {
        return (
            <div>
                <div className="row px-3">
                    <div className="col-3 ml-auto text-center font-Size-10 text-black-50 m-0 p-0">
                        Quantité x prix 
                    </div>
                    <div className="col-2 text-center font-Size-10 text-black-50 m-0 p-0">
                        sous-total
                    </div>
                    <div className="col-1 text-center ml-1 px-2 font-Size-10 text-black-50 m-0 p-0">
                        supprimer
                    </div>
                    <div className="dropdown-divider"></div>
                </div>

                <div className="row pb-2 px-3">
                    <div className="col-4">
                        <span className="">{this.props.cart.desc} </span>
                        /
                        <span className="text-black-50"> {this.props.cart.marque}</span>
                    </div>
                    <div className="col-3 ml-auto border-left text-center">
                        <span><i className="fas fa-chevron-left mr-1"></i></span>
                        {this.props.cart.quantity} x {this.props.cart.price} 
                        <span><i className="fas fa-chevron-right ml-1"></i></span>
                    </div>
                    <div className="col-2 text-center border-left">
                        {this.props.cart.underTotal} €
                        
                    </div>
                    <div className="col-1 text-center ml-1 px-2 border-left">
                        <button 
                            type="button" 
                            className="close" 
                            aria-label="Close"
                            onClick={this.props.clickHandlerDelete}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            <div className="dropdown-divider"></div>
            </div>
            
        )
    }
}
export default ShoppingCart;