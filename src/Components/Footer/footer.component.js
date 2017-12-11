import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './footer.component.scss';

const Footer = () => (
  // <header key='contHeader' className='container-header'>
  //   <label className='toggle-btn' htmlFor='menuToggleCheckbox'>☰</label>
  // </header>,
  // <input key='headerMenuToggleInput' id='menuToggleCheckbox' type='checkbox' hidden />,
  // <nav key='headerNavMenu' className='menu' />
  <footer className='footer'>
    <div className='footer__logo'><span>CoverUp</span></div>
    <div className='footer__main'>
      <span>+7 917 214 58 50</span>
      <div className='footer__social'>
        <a href="//vk.com/satteloiv" className='icon icon-vk' aria-hidden='true'><img className="icon" src={require('../../Assets/images/icons/vk.svg')}/></a>
        <a href="//vk.com/satteloiv" className='icon icon-instagram'><img className="icon" src={require('../../Assets/images/icons/instagram.svg')}/></a>
        <a href="//vk.com/satteloiv" className='icon icon-twitter'><img className="icon" src={require('../../Assets/images/icons/twitter.svg')}/></a>
      </div>
    </div>
    <div className='footer__copyright'><span>© CoverUp, 2017</span></div>
  </footer>
);

export default Footer;