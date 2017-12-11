import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Home from './views/Home';
import AboutUs from './views/AboutUs';

export default () => [
  <Route path='/' component={Home} exact/>,
  <Route path='/about-us' component={AboutUs} />
];