# node-api system

This repo helps you set up a BE api framework. 

## Prerequisites
Node version should be greater than 12.16.0

## Installing

### Steps

1. Clone this repository by using: https://github.com/garvrox/node-api.git
2. After cloning 
```diff
   run npm install
```
3. Change /src/config/default.sample.json to /src/config/default.json
4. Enter you MySql connection credentials
5. Start Application 
```diff
   npm start or yarn start
```
6. Your application will runs on http://localhost:4000/
7. Your Apollo GraphQL client will runs on http://localhost:4000/graphql

## Tech Stack

1. **Node.js**
2. **Koa** - Web Framework for Node.js
3. **GraphQl** - A query language for your API
4. **Apollo Server** - Apollo Server is an open-source, spec-compliant GraphQL server
5. **MySql** - A node.js driver for mysql
6. **Knex** - Query builder for Node.js
