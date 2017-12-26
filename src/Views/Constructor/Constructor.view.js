import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import fire from ':/fireScript';
import { brands, models } from './Constants';
import Dropdown from '../../Components/Dropdown';

import './Constructor.view.scss';


export default class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChanged: false,
            modelsList: [],
            choosedModel: undefined
        };
    }

    toggle() {
        this.setState({
            isChanged: true
        });
    }

    onBrandChanged = (id) => {
        this.setState({
            modelsList: models[id],
            choosedModel: null,
            isChanged: false
        });
    };

    onModelChanged = (id) => {
        this.setState({
            choosedModel: id,
            isChanged: false
        });
    }

    componentWillMount() {
        this.brands = Object.keys(brands).map(key => brands[key]);
    }

    render() {
        return (
            <main className='constructor-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Конструктор</h1>
                </div>
                <section className='main-section'>
                    <section className='constructor'>
                        <span className="constructor-label">Выбери марку:</span>
                        <Dropdown items={this.brands} onChange={this.onBrandChanged} />
                        <span className="constructor-label">Выбери модель:</span>
                        <Dropdown items={this.state.modelsList} onChange={this.onModelChanged}/>
                        <img id="template" className={this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/empty.jpg')} alt="Template" />
                        <img id="template_res" className={!this.state.isChanged ? "hidden" : ""} src={require('../../Assets/images/full.jpg')} alt="Template" />
                        <input id="file" type="file" className="hidden input" onChange={() => this.toggle()} disabled={!this.state.choosedModel}/>
                        <label htmlFor="file" className='btn btn-green' >Загрузить картинку</label>
                        <NavLink to='/cart' className={'btn btn-lavanda ' + (!this.state.isChanged ? "hidden" : '')} >Купить</NavLink>
                    </section>
                </section>
            </main>
        );
    }
}