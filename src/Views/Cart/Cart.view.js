import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import fire from ':/fireScript';
import Dropdown from 'Components/Dropdown';
import { brands, models } from '../Constructor/Constants';

import './Cart.view.scss';


export default class Constructor extends Component {
    constructor(props) {
        super(props);

        this.item = { name: 'olen2', header: 'Праздничный олень', text: 'Зимний праздничный олень дарит радость целый день' };

        this.state = {
            modelsList: [],
            choosedModel: null,
        };
    }

    componentWillMount() {
        this.brands = Object.keys(brands).map(key => brands[key]);
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
            choosedModel: id
        });
    }

    toggleDelivery = () => {
        this.setState(prevState => ({
            needDelivery: !prevState.needDelivery
        }));
    }

    render() {
        return (
            <main className='cart-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Корзина</h1>
                </div>
                <section className='main-section'>
                    <div className='main-section__item info-block'>
                        <div className='item-result'>
                            <img className='item-img' src={require(`../../Assets/images/catalog/${this.item.name}.jpg`)} />
                            <div className='item-model'>
                                <span className='item-name'>{this.item.header}</span>
                                <span className="constructor-label">Выбери марку:</span>
                                <Dropdown items={this.brands} onChange={this.onBrandChanged} />
                                <span className="constructor-label">Выбери модель:</span>
                                <Dropdown items={this.state.modelsList} onChange={this.onModelChanged} />
                            </div>
                            <div className='item-price'>
                                500р.
                            </div>
                        </div>
                        <div className='delivery'>
                            <div className='controls'>
                                <span className='controls-title'>Доставка</span>
                                <button
                                    onClick={this.toggleDelivery}
                                    className='btn btn-lavanda'>{this.state.needDelivery ? '✔' : ''}</button>
                            </div>
                            {this.state.needDelivery &&
                                <div className='row'>
                                    <span className='name'>Улица, дом, квартира:</span>
                                    <input className='input' type='text' />
                                </div>
                            }
                            <div className='delivery-price'>
                                {this.state.needDelivery ? '200р.' : '0р.'}
                            </div>
                        </div>
                        <div className='pay-result'>
                            <span className='left-part'>Итого</span>
                            <span className='right-part'>{this.state.needDelivery ? '700р.' : '500р.'}</span>
                        </div>
                        <button className='btn btn-lavanda' disabled={!this.state.choosedModel}>Заказать</button>
                    </div>
                </section>
            </main>
        );
    }
}