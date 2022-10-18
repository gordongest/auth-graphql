import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const client = new ApolloClient({
    dataIdFromObject: o => o.id
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route exact path="signup" component={SignUp} />
                <Route exact path="login" component={LogIn} />
            </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
