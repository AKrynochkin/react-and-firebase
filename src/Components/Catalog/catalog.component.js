import React from 'react';
import { Link } from 'react-router-dom';

import './catalog.component.scss';

const Catalog = ({ items, isChild }) => {
    return (
        <article className='catalog'>
            {items.map((item, i) => (
                        <Link key={i} to={`/catalog/${item.name}${isChild ? '/1' : ''}`} className='catalog__item'>
                            <img
                                className='item__img'
                                src={require(`../../Assets/images/catalog/${item.name}.jpg`)} />
                            <div className='item__layout'>
                                <header className='item__layout__header'>
                                    {item.header}
                                </header>
                                <p className='item__layout__content'>{item.text}</p>
                            </div>
                        </Link>
                    ))
            }
        </article>
    )
}

export default Catalog;