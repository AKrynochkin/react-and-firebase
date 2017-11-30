import React, { Component } from 'react';

import Menu from '../Components/Menu';
import AppRoutes from '../routes';

const App = () => (
  <div className="app-container">
    <Menu />
    <AppRoutes />
  </div>
);

export default App;