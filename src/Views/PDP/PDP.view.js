import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import fire from ':/fireScript';

import './PDP.view.scss';


export default class Constructor extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <main className='pdp-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Информация о товаре</h1>
                </div>
                <section className='main-section'>
                    <div className='main-section__item info-block'>
                        <div className='info-block__left'>
                            <img id="template" className='pdp-image' src={require('../../Assets/images/catalog/olen.jpg')}/> 
                        </div>
                        <div className='info-block__right'>
                            <h3 className='info-block__title'>Олень с усами</h3>
                            <p className='info-block__text'>Для стильных аристократов.</p>
                            <p className='info-block__text'>Цена: <span className="info-block__price">500 руб.</span></p>
                            <NavLink to='/cart' className='btn btn-lavanda' >Купить</NavLink>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}