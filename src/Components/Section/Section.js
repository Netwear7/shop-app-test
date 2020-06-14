import React, { Component } from 'react';
import Product from './Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import data from "./Product/data/product.json";
import './Section.css';

class Section extends Component{
    constructor(){
        super();
        this.state = {
            products: data,
            cart: [],
            countProductCart: 0,
            total: 0,
        }
    }

    handleDeleteProduct(id){
        const array = this.state.products.slice();
        const index = array.findIndex(function(product){
            return product.id === id
        });
        array.splice(index, 1);
        this.setState({
            products : array
        })
    }

    handleDeleteProductCart(id){
        const arrayCart = this.state.cart.slice()
        const index = arrayCart.find(element => element.id === id)
        arrayCart.splice(index, 1);
        const countProductCart = this.state.countProductCart - index.quantity
        const total = this.state.total - index.underTotal
        this.setState({
            cart : arrayCart,
            countProductCart,
            total
        })
    }

    checkProductNotInCart(product){
        const array = this.state.cart.slice()
        const test = array.find(element => element.id === product.id)
        const Boolean = !test ? true: false;
        return Boolean
    }

    addCart(id){
        const arrayProduct = this.state.products.slice();
        const product = arrayProduct[id]
        const countProductCart = this.state.countProductCart + 1
        console.log(arrayProduct)
        console.log(product)
        this.setState({
            countProductCart
        })


        if(this.checkProductNotInCart(product)){
            product.quantity = 1
            product.underTotal = product.quantity * product.price
            
            
            this.setState({
                cart : [...this.state.cart, product],
                total:  this.state.total + product.underTotal,
            })
            
        }
        else{
            const arrayCart = this.state.cart.slice()
            const productInCart = arrayCart.find(element => element.id === id)
            const countProductCart = this.state.countProductCart + 1
            productInCart.quantity++
            productInCart.underTotal = productInCart.quantity * productInCart.price
            this.setState({
                cart : arrayCart,
                total:  this.state.total + productInCart.price,
                countProductCart
            })
        }
        console.log(this.state.countProductCart)
        

        // console.log(productWithQuantity)

    }

    render(){
        return (
            <div className="container-fluid bg-light">
                <div className="row justify-content-end sticky-top">
                    <div className="dropdown ml-auto sticky-top">
                        <button 
                            className="btn btn-light dropdown-toggle btn-cart position-button-cart sticky-top" 
                            type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            Panier ({this.state.countProductCart})
                        </button>
                        
                        <div className="dropdown-menu dropdown-menu-right shopping-cart p-2" aria-labelledby="dropdownMenuButton">
                            <div className="row">
                                <div className="col-6 offset-3">
                                    <h3 className="mb-4">Liste d'achat(s)</h3>
                                </div>
                            </div>

                            {
                            // vvvvvvvvvv opération ternaire sur plusieurs ligne vvvvvvvvvv
                            this.state.cart.length ?
                                this.state.cart.map((cart, index) => (
                                    <ShoppingCart 
                                        cart={cart}
                                        clickHandlerDelete={() => this.handleDeleteProductCart(cart.id)}  
                                        key={index}
                                    />
                                )) : 
                            (<div className="row m-3">
                                <div className="row">
                                    Votre panier est vide, continuer vos achats
                                </div>
                            </div>)
                            }
                            <div className="row px-3">
                                <div className="col-2 ml-auto text-center text-black-50 m-0 p-0">
                                    Total : 
                                </div>
                                <div className="col-2 text-center text-black-50 m-0 p-0">
                                    {this.state.total} €
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="row justify-content-start m-4">
                    {this.state.products.map((product, index) => (
                        <Product
                            clickHandlerDelete={() => this.handleDeleteProduct(product.id)}
                            clickHandlerAddCart={() => this.addCart(product.id)}
                            product={product}
                            key={index}
                        />
                    ))}
                </section>
            </div>
        )
    }
}

export default Section;