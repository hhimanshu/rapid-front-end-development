import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';
import { isHostLocal } from './api/constants';

if (isHostLocal) {
  const { worker } = require('./mocks/browser');
  worker.start();
}
ReactDOM.render(<App />, document.getElementById('root'));
