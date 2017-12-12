import React, { Component } from 'react';

import fire from ':/fireScript';

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='about-us-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>Создай свой чехол сам</h1>
                </div>
                <div className='main-section'>
                    <div className='main-section__item info-block'>
                        <div className='info-block__left'>
                            <img className='info-block__img' src={require('../../Assets/images/about-icon.png')}></img>
                        </div>
                        <div className='info-block__right'>
                            <h3 className='info-block__title'>CoverUp</h3>
                            <p className='info-block__text'>Бескрайний космос, наша планета, человек — все это появилось после одного неординарного события, которое ученые называют «большим взрывом». </p>
                            <p className='info-block__text'>Большой взрыв — это творческий импульс, из которого родилось «всё». </p>
                            <p className='info-block__text'>Так же было и с нашими чехлами. они появились из ничего в результате большого взрыва мозга их создателей. </p>
                            <p className='info-block__text'>Мы хотим вдохновлять. Пусть наши олени, панды, елки и многое другое помогают придумывать что-то новое и воплощать самые смелые замыслы! </p>
                            <p className='info-block__text'>Создай свою вселенную вместе с нами!</p>
                        </div>
                    </div>
                    <div className='main-section__item info-block'>
                    <div className='info-block__left'>
                        <img className='info-block__img' src={require('../../Assets/images/about-shop.png')}></img>
                    </div>
                    <div className='info-block__right'>
                        <h3 className='info-block__title'>CoverUp уже в товем городе!</h3>
                        <p className='info-block__text'>Доставка: Стоимость доставки по Саратову и Энгельсу - 200 руб.</p>
                        <div className='store-info'>
                            <h3 className='store-info__title'>Саратов</h3>
                            <div><span className='store-info__field'>Адрес:</span>
                            <span className='store-info__value'>ТЦ "Город", 3 этаж</span></div>
                            <div><span className='store-info__field'>Время работы:</span>
                            <span className='store-info__value'>c 10:00 до 20:00</span></div>
                            <div><span className='store-info__field'>Телефон:</span>
                            <span className='store-info__value'>+7 917 214-58-50</span></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}