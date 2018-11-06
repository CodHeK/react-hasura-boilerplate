# React-Hasura-Boilerplate - hello-world

## Getting Started

### Installing

You need to first install all the npm packages that are used in this boilerplate.

```
$ npm install
```

Once all the dependencies are installed, you're ready to go!

```
$ npm start
```
This starts the development server at port 3000 (localhost).


### What does this boilerplate contain ?

This is a simple and easy to use boilerplate which gives you start by doing all the work connecting your hasura graphql endpoint using `ApolloClient` .

Also, contains the starter code perform `subscriptions` .

```
const GRAPHQL_ENDPOINT = "";

// Make WebSocketLink with appropriate url
const mkWsLink = (uri) => {
  const splitUri = uri.split('//');
  const subClient = new SubscriptionClient(
    'wss://' + splitUri[1], //your websocket endpoint to perform subscriptions.
    { reconnect: true }
  );
  return new WebSocketLink(subClient);
}

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });
const wsLink = mkWsLink(GRAPHQL_ENDPOINT);
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

// Instantiate client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false
  })
})
```
Once the `client` is initialized pass it as a `prop` in the `ApolloProvider` Component.

- `httpLink` - your actual graphql endpoint needed to perform __query__ and __mutations__
- `wsLink` - used to perform __subscriptions__ operations.
