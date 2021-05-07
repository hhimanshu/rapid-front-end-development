import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
ReactDOM.render(<App />, document.getElementById('root'));
