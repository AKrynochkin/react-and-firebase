import React, { Component } from 'react';

import AppRoutes from ':/routes';
import Menu from 'Components/Menu';
import Footer from 'Components/Footer';

const App = () => [
  <Menu key='appHeader' />,
  <AppRoutes key='appRoutes' />,
  <Footer key='appFooter' />
];

export default App;