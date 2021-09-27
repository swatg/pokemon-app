import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { APOLLO_CLIENT_ENDPOINT } from 'config';
import Routes from 'routes/index';
import Header from 'components/Header';

function App() {

  const client = new ApolloClient({
    uri: APOLLO_CLIENT_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <Router>
      <Header />
      <main>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </main>
    </Router>    
  );
}

export default App;
