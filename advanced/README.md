# React-Hasura-Boilerplate - advanced

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



### Deployment

First create a file `env.js` in your `/src` folder, this file will contain your environment variables needed for the app to work.

```
export const vars = {
  "GRAPHQL_ENDPOINT": "https://",
  "DOMAIN": "", //app.autho.com
  "CLIENT_ID": "",
  "CALLBACK_URL": "https://localhost:3000/callback"
}
```
#### Auth0 configs :
- Go to `Applications` on your auth0 dashboard, set the environment variables accordingly.
- In the callback url field, use only the url that you have specified in the `Allowed Callback URLs` field in your auth0 dashbaord.
- In the field `Allowed Origins (CORS)` in your auth0 dashboard, you may add 2 urls, `<your- app-url>` and `<your-callback-url>` just incase you get `CORS` error.

#### Heroku configs :
- Go to app `Settings`, open `Reveal Config Vars`, you need to set a few variables mentioned below.
    `HASURA_GRAPHQL_CORS_DOMAIN` - add your app URL.
    `HASURA_GRAPHQL_AUTH_HOOK` - URL of your webhook.
- For other ![GraphQL server options](https://docs.hasura.io/1.0/graphql/manual/deployment/graphql-engine-flags/reference.html).
- Your may deploy your webhhook anywhere you wish to __heroku__ or __glitch__.

To setup your own webhook refer to this ![link](https://github.com/hasura/sample-auth-webhook).
