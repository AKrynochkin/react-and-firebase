import React, { Component } from 'react';

import fire from ':/fireScript';

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='sub-header'>
                    <h1 className='sub-header__text'>Создай свой чехол сам</h1>
                </div>
                <div className='main-section'>
                    <div className='main-section__item info-block'>
                        <div className='info-block__left'>
                            <img className='info-block__img' src={require('../../Assets/images/about-icon.png')}></img>
                        </div>
                        <div className='info-block__right'>
                            <h3 className='info-block__title'>CoverUp</h3>
                            <p className='info-block__text'>Qui laborum exercitation laboris Lorem duis. In exercitation eiusmod est ea eiusmod cupidatat culpa in nisi nisi exercitation incididunt magna. Id velit enim voluptate nisi.</p>
                            <p className='info-block__text'>Commodo ipsum minim nostrud aliqua exercitation aliquip commodo. Ut amet elit sit Lorem eiusmod in. Magna dolor magna ea reprehenderit. Ea ex sint pariatur consectetur proident nostrud. Exercitation dolor fugiat qui ipsum aliqua aliquip deserunt deserunt.</p>
                            <p className='info-block__text'>Magna incididunt id in dolor anim do. Aliquip laborum laborum culpa nostrud nulla commodo labore reprehenderit nisi excepteur amet. Fugiat sit eu irure fugiat velit velit dolore fugiat laboris occaecat est cupidatat nostrud officia. Do incididunt sint dolore laborum occaecat nulla aliquip non. Anim incididunt ad consequat cillum minim minim sit eu.</p>
                        </div>
                    </div>
                    <div className='main-section__item info-block'>
                    <div className='info-block__left'>
                        <img className='info-block__img' src={require('../../Assets/images/about-shop.png')}></img>
                    </div>
                    <div className='info-block__right'>
                        <h3 className='info-block__title'>CoverUp уже в товем городе!</h3>
                        <p className='info-block__text'>Qui laborum exercitation laboris Lorem duis. In exercitation eiusmod est ea eiusmod cupidatat culpa in nisi nisi exercitation incididunt magna. Id velit enim voluptate nisi.</p>
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