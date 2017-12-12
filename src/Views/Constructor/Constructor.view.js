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
                    <section>
                        <img id="template" className={this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/empty.jpg')} alt="Template"/> 
                        <img id="template_res" className={!this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/full.jpg')} alt="Template"/> 
                        <input type="file" onChange={() => this.toggle()} /> 
                    </section>
                </section>
            </main>
        );
    }
}