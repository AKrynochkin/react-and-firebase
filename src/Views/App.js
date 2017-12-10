import React, { Component } from 'react';

import AppRoutes from ':/routes';
import Menu from 'Components/Menu';

const App = () => [
  <Menu key='appHeader' />,
  <AppRoutes key='appRoutes' />
];

export default App;