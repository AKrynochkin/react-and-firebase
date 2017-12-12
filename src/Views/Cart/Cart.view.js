import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import fire from ':/fireScript';

import './Cart.view.scss';


export default class Constructor extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <main className='cart-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Корзина</h1>
                </div>
                <section className='main-section'>
                    <div className='main-section__item info-block'>
                        <img id="template" className='pdp-image' src={require('../../Assets/images/tehn.jpg')}/> 
                    </div>
                </section>
            </main>
        );
    }
}