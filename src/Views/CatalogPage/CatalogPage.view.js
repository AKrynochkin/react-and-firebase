import React, { Component } from 'react';

import Catalog from 'Components/Catalog';
import fire from ':/fireScript';

import './CatalogPage.view.scss';


const items = [
    {name: 'valentine', header: 'Ми-ми-ми', text: 'Не выпускай милоту из рук'},
    {name: 'new-year', header: 'NewYear', text: 'Поделись новогодним настроением'},
    {name: 'birthday', header: 'Туса-джуса', text: 'Выделяйся на тусовках'},
    {name: 'games', header: 'Игры', text: 'Для истинных киберспортсменов'},
    {name: 'panda', header: 'Стильно, модно, молодежно', text: 'То самое чувство когда ты круче всех! '},
    {name: 'nature', header: 'Природа', text: 'Любимое время года будет всегда с тобой'},
    {name: 'abstract', header: 'Абстракция', text: 'Ярко, красиво и без лишних слов'},
    {name: 'girls', header: 'Девушки', text: 'Не переставай любоваться женской красотой'},
    {name: 'movies', header: 'Фильмы и сериалы', text: 'Любимые герои на твоем смартфоне'}
];

const items2 = [
    {name: 'bear', header: '', text: ''},
    {name: 'new-year', header: '', text: ''},
    {name: 'olen', header: '', text: ''},
    {name: 'olen2', header: '', text: ''}
];

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='catalog-container'>
                <div className='sub-header transparent'>
                    <h1 className='sub-header__text'>{this.props.match.params.type || 'Каталог'}</h1>
                </div>
                <section className='main-section'>
                    <section>
                        {this.renderContent()}
                    </section>
                </section>
            </main>
        );
    }

    renderContent() {
        const { type, id } = this.props.match.params;
        if (!type && !id) {
            return (
                <Catalog items={items} />
            );
        }

        if (!!type && !id) {
            return (
                <Catalog items={items2} isChild />
            );
        }
        return null;
    }
}
