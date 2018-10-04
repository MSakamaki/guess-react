import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjmbg1yll2s1p019oocypsthn/master';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: GRAPHCMS_API }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
