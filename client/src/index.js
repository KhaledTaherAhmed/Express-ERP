import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import App from './App';
import Footer from './footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('pg1'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();