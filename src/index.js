/* import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'; */
import ApolloClient from 'apollo-boost';
import React from 'react'
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom'

import { App } from './components/App';
import Context from './Context';

/* const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://petgram-server-luis-garcia.luis11-dev.vercel.app/graphql'
}) */

const client = new ApolloClient({ 
    uri: 'https://petgram-server-luis-garcia.luis11-dev.vercel.app/graphql', 
    request: operation => {
      const token = window.sessionStorage.getItem('token');
      const authorization = token ? `bearer ${token}` : '';
      operation.setContext({
        headers: {
          authorization
        }
      })

    } ,
    onError: error => {
      const { networrkError } = error;
      if (networrkError && networrkError.result.code === 'invalid token') {
        window.sessionStorage.removeItem('token');
        window.location.href='/'
      }
    }
});

const container = document.getElementById('app')

ReactDOM.render(
    <Context.Provider >
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
    , container
)
