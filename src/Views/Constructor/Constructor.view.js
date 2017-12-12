import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import fire from ':/fireScript';

import './Constructor.view.scss';


export default class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChanged: false
        };
    }

    toggle() {
        this.setState({
            isChanged: true
        });
    }

  
    render() {
        return (
            <main className='constructor-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Конструктор</h1>
                </div>
                <section className='main-section'>
                    <section className='constructor'>
                        <img id="template" className={this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/empty.jpg')} alt="Template"/> 
                        <img id="template_res" className={!this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/full.jpg')} alt="Template"/> 
                        <label htmlFor="file" className='btn btn-green' >Загрузить картинку</label>
                        <input id="file" type="file" className="hidden" onChange={() => this.toggle()} /> 
                        <NavLink to='/cart' className={'btn btn-lavanda ' + (!this.state.isChanged ? "hidden" : '')} >Купить</NavLink>
                    </section>
                </section>
            </main>
        );
    }
}