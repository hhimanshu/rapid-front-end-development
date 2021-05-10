import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import { isHostLocal } from './api/constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { BusinessContainer } from './containers/businesses';

if (isHostLocal) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const client = new QueryClient();
client.setDefaultOptions({
  queries: {
    staleTime: 5000, // All configurations are available at https://react-query.tanstack.com/reference/QueryClient#_top
  },
});
const Root = (
  <QueryClientProvider client={client}>
    <ChakraProvider>
      <BusinessContainer />
    </ChakraProvider>
  </QueryClientProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
