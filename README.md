# Thank you for checking this out.
This project shows the usage of nestjs to create a simple API.
## Available routes
Home: http://localhost:3000

<ol>
      <li>Get All Users. <br/> GET /users <br/> <a href="http://localhost:3000/users" target="_blank">http://localhost:3000/users</a></li>
      <li>Get All Users by a Role (subscriber or admin).<br/> GET /users?role='admin|subscriber' <br/><a href="http://localhost:3000/users?role=admin" target="_blank">http://localhost:3000/users?role=admin</a></li>
      <li>Get a User by ID: <br/> GET /users/:id <br/><a href="http://localhost:3000/users/1" target="_blank">http://localhost:3000/users/1</a></li>
      <li>Create a User: <br/> POST /users <br/> body should be like this {name: string, email: string, role: string}</li>
      <li>Update a User by ID:<br/> PATCH /users/:id <br/> body should be like this {name: string, email: string, role: string}</li>
      <li>Delete a User by ID: <br/> DELETE /users/:id</li>
</ol>


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
