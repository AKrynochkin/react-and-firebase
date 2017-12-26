import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import CatalogPage from './views/CatalogPage';
import Constructor from './views/Constructor';
import PDP from './views/PDP';
import Cart from './views/Cart';

export default () => [
  <Route key="homeRoute" exact path='/' component={Home}/>,
  <Route key="aboutRoute" path='/about-us' component={AboutUs} />,
  <Route key="constRoute" exact path='/constructor' component={Constructor} />,
  <Route key="catalogRoute" exact path='/catalog' component={CatalogPage} />,
  <Route key="catTyprRoute" exact path='/catalog/:type' component={CatalogPage} />,
  <Route key="catItemRoute" path='/catalog/:type/:id' component={PDP} />,
  <Route key="cartRoute" path='/cart' component={Cart} />
];