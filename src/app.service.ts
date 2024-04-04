import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <h1>Hello!</h1>
    <h2>Welcome to NestJS!</h2>
    <p>Thank you for checking out this project.</p>
    <p>This project provide the following API</p>
    <ol>
      <li>Get All Users. <br/> GET /users <br/> <a href="http://localhost:3000/users" target="_blank">http://localhost:3000/users</a></li>
      <li>Get All Users by a Role (subscriber or admin).<br/> GET /users?role='admin|subscriber' <br/><a href="http://localhost:3000/users?role=admin" target="_blank">http://localhost:3000/users?role=admin</a></li>
      <li>Get a User by ID: <br/> GET /users/:id <br/><a href="http://localhost:3000/users/1" target="_blank">http://localhost:3000/users/1</a></li>
      <li>Create a User: <br/> POST /users <br/> body should be like this {name: string, email: string, role: string}</li>
      <li>Update a User by ID:<br/> PATCH /users/:id <br/> body should be like this {name: string, email: string, role: string}</li>
      <li>Delete a User by ID: <br/> DELETE /users/:id</li>
</ol>
    
    `;
  }
}
