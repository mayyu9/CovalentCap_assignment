import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DisplayData from './ParentData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DisplayData />, document.getElementById('root'));
registerServiceWorker();
