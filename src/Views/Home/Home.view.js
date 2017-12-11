import React, { Component } from 'react';

import Catalog from 'Components/Catalog';
import fire from ':/fireScript';

import './home.view.scss';

const items = [
    'valentine',
    'new-year',
    'birthday',
    'games',
    'panda',
    'nature',
    'abstract',
    'girls',
    'movies'
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = { messages: [] }; // <- set up react state
    }

    // componentWillMount() {
    //     /* Create reference to messages in Firebase Database */
    //     let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    //     messagesRef.on('child_added', snapshot => {
    //         /* Update React state when message is added at Firebase Database */
    //         let message = { text: snapshot.val(), id: snapshot.key };
    //         this.setState(prevState => ({ messages: [message].concat(prevState.messages) }));
    //     })
    // }

    // addMessage(e) {
    //     e.preventDefault(); // <- prevent form submit from reloading the page
    //     /* Send the message to Firebase */
    //     fire.database().ref('messages').push(this.inputEl.value);
    //     this.inputEl.value = ''; // <- clear the input
    // }

    // render() {
    //     return (
    //         <form onSubmit={this.addMessage.bind(this)}>
    //             <input type="text" ref={el => this.inputEl = el} />
    //             <button type="submit"> CLICK HERE! </button>
    //             <ul>
    //                 { /* Render the list of messages */
    //                     this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
    //                 }
    //             </ul>
    //         </form>
    //     );
    // }
    render() {
        return (
            <main className='home-content'>
                <section className='content__block transparent first'>
                    <section className='block__content'>
                        Anim voluptate reprehenderit ea duis amet.
                    </section>
                    <span className='big-arrow'>↓</span>
                </section>
                <section className='content__block'>
                    <header className='block__header'>
                        Anim voluptate duis:
                    </header>
                    <section className='block__content'>
                        <Catalog items={items} />
                    </section>
                </section>
                <section className='content__block transparent first'>
                    <section className='block__content middle'>
                        Удобный и многофункциональный конструктор для создания неповторимого чехла.
                        <button className='btn btn-green'>Перейти к конструктору</button>
                    </section>
                </section>
                <section className='content__block  model'>
                    <div className='block__text'>
                        <h1>Цветные, яркие, твои!</h1>
                        <p>✓ Создай свой дизайн!</p>
                        <p>✓ Будь оригинальным!</p>
                        <p>✓ Сделай подарок от души!</p>
                    </div>
                    <div className='block__img'>
                        <img src={require('../../Assets/images/girl-cover.jpg')}/>
                    </div>
                </section>
                <section className='content__block transparent first'>
                    <section className='block__content middle'>
                        В каталоге можно найти множество дизайнов на любой вкус.
                        <button className='btn btn-lavanda'>Перейти в каталог</button>
                    </section>
                </section>
                <section className='content__block  final'>
                    <div className='block__img'>
                        <img src={require('../../Assets/images/covers.jpg')}/>
                    </div>
                    <div className='block__text'>
                        <h1>Почему именно CoverUp?</h1>
                        <p>✓ Дизайнерский чехол просто необходим, чтобы создать запоминающийся образ (даже соблюдая дресс-код). В нашем интернет-магазине чехлов вы сможете найти как смелые и неожиданные решения, так и создать что-то свое, но не менее интересное. Такой чехол подойдет и для любителей побаловать себя, и в качестве подарка.</p>
                        <p>✓ Модный чехол – это отличный подарок для мужчины и женщины. Прикольные надписи и оригинальные принты сделают его и по-настоящему особенным и запоминающимся.</p>
                        <p>✓ Оригинальный чехол даст понять, что у вас все в порядке и с чувством стиля и с чувством юмора! А для людей креативных, творчески мыслящих – это абсолютный must have! </p>
                    </div>
                </section>
            </main>
        );
    }
}