import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import { isHostLocal } from './openapi/constants';

if (isHostLocal) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const client = new QueryClient();
// All configurations are available at https://react-query.tanstack.com/reference/QueryClient#_top
client.setDefaultOptions({
  queries: {
    staleTime: 5000,
  },
});
const Root = (
  <QueryClientProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
