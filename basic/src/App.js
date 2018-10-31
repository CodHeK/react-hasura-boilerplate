import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

const client = new ApolloClient({
  uri: "https://hasuratodo.herokuapp.com/v1alpha1/graphql", //add your graphql endpoint here
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App container-fluid">
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/dashboard/:name/:userID" exact={true} component={Dashboard} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
