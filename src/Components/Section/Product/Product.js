import React, { Component } from 'react';
import './Product.css';


class Product extends Component{    
    render(){
        const BtnSuppr = (
            <button 
                onClick={this.props.clickHandlerDelete} 
                className="btn btn-outline-danger w-100 text-nowrap font-Size-10" >
                Supprimer
            </button>
        )

        const BtnModify = (
            <button 
                className="btn btn-outline-primary ml-1 w-100 text-nowrap font-Size-10" >
                Modifier
            </button>
        )

        const btnAddShoppingCart = (
            <button 
                onClick={this.props.clickHandlerAddCart}
                className="btn btn-primary w-100 text-nowrap font-Size-15" >
                Ajouter au panier
            </button>
        )

        return (
            <div className="card col-2 m-4 shadow-sm">
                <div className="img-container m-2">
                    <img className="card-img-top" src={this.props.product.img} alt="img product" />
                </div>
                <hr/>
                <div className="card-body mb-2 p-0">
                    <h5 className="card-title">{this.props.product.desc}</h5>
                    <p className="mb-1">Marque : {this.props.product.marque}</p>
                    <p className="mb-2">prix : {this.props.product.price} €</p>
                    <hr/>

                    <div className="row d-flex justify-content-center">
                        <div className="col-6">{BtnSuppr}</div>
                        <div className="col-6">{BtnModify}</div>
                    </div>

                    <div className="col-12 mt-3 mb-3 p-0">{btnAddShoppingCart}</div>
                </div>
            </div>
        )
    }
}

export default Product;