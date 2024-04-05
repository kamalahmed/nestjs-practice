# Thank you for checking this out
This project shows the usage of nestjs to create a simple API.
## Available routes
Home: http://localhost:3000

================================================================

Users REST API :
available in the `main` branch. It uses pure nestjs features only.
================================================================
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



================================================================

Employees API :
available in the `rest-api-prisma` branch. It uses postgresql and prisma ORM
================================================================
#### Setup
I have used postgressql service from neon.tech. Create  free account and then copy paste your database information to /prisma/schema.prisma and rename .env-sample to .env and paste your env file infromation from neon.tech dashboard. You can test everything for free.

Once you have made the changes. then run the following command to run the database migration.

```bash
$ npx prisma migrate dev --name initial_migration
```
Then visits the create route from below to add some employees.

### Get All Employees
`GET` /employees 

<a href="http://localhost:3000/employees" target="_blank">http://localhost:3000/employees</a>


### Get All Employees by a Role (SUBSCRIBER or ADMIN)
`GET` /employees?role='ADMIN|SUBSCRIBER'

<a href="http://localhost:3000/employees?role=ADMIN" target="_blank">http://localhost:3000/employees?role=ADMIN</a>


### Get a Employee by ID
`GET` /employees/:id

<a href="http://localhost:3000/employees/1" target="_blank">http://localhost:3000/employees/1</a>

### Create a Employee
`POST` /employees
request body:
```json
{name: string, email: string, role: string}
```
Note: Role Shoulde be capitalized `ADMIN` or `SUBSCRIBER`

### Update a Employee
`PATCH` /employees/:id
request body:
```json
{name: string, email: string, role: string}
```

### Delete a Employee by ID
`DELETE` /employees/:id

---


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
