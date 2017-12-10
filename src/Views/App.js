import React, { Component } from 'react';

import AppRoutes from ':/routes';
import Menu from 'Components/Menu';

const App = () => (
  <div className="app-container">
    <Menu />
    <AppRoutes />
  </div>
);

export default App;