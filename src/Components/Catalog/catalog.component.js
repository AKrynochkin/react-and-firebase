import React from 'react';
import { Link } from 'react-router-dom';

import './catalog.component.scss';

const Catalog = ({ items }) => {
    return (
        <article className='catalog'>
            {items.map((item, i) => (
                        <Link key={i} to={`/catalog/${item}`} className='catalog__item'>
                            <img
                                className='item__img'
                                src={require(`../../Assets/images/catalog/${item}.jpg`)} />
                            <div className='item__layout'>
                                <header className='item__layout__header'>
                                    Lorem Ipsum
                                </header>
                                <p className='item__layout__content'>Et incididunt ullamco fugiat
                                incididunt laborum adipisicing mollit sunt occaecat
                                laboris eu eu laborum anim.</p>
                            </div>
                        </Link>
                    ))
            }
        </article>
    )
}

export default Catalog;