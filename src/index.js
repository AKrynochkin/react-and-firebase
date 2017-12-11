import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Views/App';

import 'normalize.css';
import './styles/index.scss';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render((
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ), document.getElementById('root'));
    });
}
