import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const client = new ApolloClient({
  uri: "", //add your graphql endpoint here 
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App container-fluid">
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
