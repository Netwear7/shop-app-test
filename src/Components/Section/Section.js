import React, { Component } from 'react';
import Product from './Product/Product';
import data from "./Product/data/product.json";
import './Section.css';

class Section extends Component{
    constructor(){
        super();
        this.state = {
            Product: data,
        }
    }

    render(){
        return (
            <section className="row justify-content-start m-4">

                {this.state.Product.map((data, index) => (
                    <Product data={this.state.Product[index]} key={index}/>
                ))}
            </section>
        )
    }
}

export default Section;