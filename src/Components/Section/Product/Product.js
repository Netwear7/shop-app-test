import React, { Component } from 'react';
import './Product.css';

class Product extends Component{
    render(){
        return (
            <div className="card col-2 m-4 ">
                <div className="img-container m-2">
                    <img className="card-img-top" src={this.props.data.img} alt="img product" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.desc}</h5>
                    <p>Marque : {this.props.data.marque}</p>
                    <p>prix : {this.props.data.price} €</p>
                </div>
            </div>
        )
    }
}

export default Product;
