import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import CatalogPage from './views/CatalogPage';
import Constructor from './views/Constructor';
import PDP from './views/PDP';
import Cart from './views/Cart';

export default () => [
  <Route exact path='/' component={Home}/>,
  <Route path='/about-us' component={AboutUs} />,
  <Route exact path='/constructor' component={Constructor} />,
  <Route exact path='/catalog' component={CatalogPage} />,
  <Route exact path='/catalog/:type' component={CatalogPage} />,
  <Route path='/catalog/:type/:id' component={PDP} />,
  <Route path='/cart' component={Cart} />
];