import React, { Component } from 'react';

import AppRoutes from ':/routes';
import Menu from 'Components/Menu';
import Footer from 'Components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        const root = document.body.scrollTop = 0;
        return pushState.apply(history, arguments);
    };
  }

  render() {
    return [
      <Menu key='appHeader' />,
      <AppRoutes key='appRoutes' />,
      <Footer key='appFooter' />
    ];
  }
}
