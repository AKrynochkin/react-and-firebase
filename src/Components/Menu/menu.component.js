import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './menu.component.scss';

const Menu = () => (
  // <header key='contHeader' className='container-header'>
  //   <label className='toggle-btn' htmlFor='menuToggleCheckbox'>☰</label>
  // </header>,
  // <input key='headerMenuToggleInput' id='menuToggleCheckbox' type='checkbox' hidden />,
  // <nav key='headerNavMenu' className='menu' />
  <header className='header'>
    <Link className='header__logo' to='/'>
      <img className='logo' src={require('../../Assets/images/icon.png')} />
      CoverUp
    </Link>
    <article className='header__nav-panel'>
      <NavLink to='/' className='link' activeClassName='current-link' exact>Главная</NavLink>
      <NavLink to='/about-us' className='link' activeClassName='current-link'>О нас</NavLink>
    </article>
  </header>
);

export default Menu;