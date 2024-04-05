# Thank you for checking this out
This project shows the usage of nestjs to create a simple API.
## Available routes
Home: http://localhost:3000

### Get All Users
`GET` /users 

<a href="http://localhost:3000/users" target="_blank">http://localhost:3000/users</a>


### Get All Users by a Role (subscriber or admin)
`GET` /users?role='admin|subscriber'

<a href="http://localhost:3000/users?role=admin" target="_blank">http://localhost:3000/users?role=admin</a>


### Get a User by ID
`GET` /users/:id

<a href="http://localhost:3000/users/1" target="_blank">http://localhost:3000/users/1</a>

### Create a User
`POST` /users
request body:
```json
{name: string, email: string, role: string}
```


### Update a User
`PATCH` /users/:id
request body:
```json
{name: string, email: string, role: string}
```

### Delete a User by ID
`DELETE` /users/:id



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
