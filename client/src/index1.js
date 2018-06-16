import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Pg1 from './pg1';
import Pg2 from './pg2';
import Footer from './footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Pg1 />, document.getElementById('pg1'));
ReactDOM.render(<Pg2 />, document.getElementById('pg2'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();