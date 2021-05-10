import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';
import { isHostLocal } from './api/constants';
import { QueryClient, QueryClientProvider } from 'react-query';

if (isHostLocal) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const client = new QueryClient();
const app = (
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

ReactDOM.render(app, document.getElementById('root'));
