# typename-monkey-patch
Remove \_\_typename fields from graphql HOC in react-apollo component.

## Installation
```
npm install typename-monkey-patch
```

## Usage
Just import it in react project before react-apollo import. Preferably at the main index file of the application.

## React Example for src/index.js file
```JSX
import 'typename-monkey-patch';

// every component included after this line won't be getting __typename field when wrapped with graphql :)

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import FontProvider from './expo/FontProvider';
import { apolloClient } from './api/apollo-client';
import AppRoot from './app/Root';
import store from './redux/store';
import { PersistedNativeRouter } from './app/PersistedNativeRouter';

export default () => (
  <ApolloProvider client={apolloClient}>
    <FontProvider>
      <PersistedNativeRouter>
        <ReduxProvider store={store}>
          <AppRoot />
        </ReduxProvider>
      </PersistedNativeRouter>
    </FontProvider>
  </ApolloProvider>
);

```
