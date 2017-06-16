import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store';

const store = configureStore();
// for testing purposes
window.store = store;
const app = <App store={store}/>;
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
