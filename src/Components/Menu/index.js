import React, { Fragment } from 'react';

import './menu.scss';

const Menu = () => [
  <header key='contHeader' className='container-header'>
    <label className='toggle-btn' htmlFor='menuToggleCheckbox'>☰</label>
  </header>,
  <input key='headerMenuToggleInput' id='menuToggleCheckbox' type='checkbox' hidden />,
  <nav key='headerNavMenu' className='menu' />
];

export default Menu;