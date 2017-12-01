import React, { Fragment } from 'react';

import './menu.scss';

const Menu = () => [
  <header className='container-header'>
    <label className='toggle-btn' for='menuToggleCheckbox'>☰</label>
  </header>,
  <input id='menuToggleCheckbox' type='checkbox' hidden />,
  <nav className='menu' />
];

export default Menu;