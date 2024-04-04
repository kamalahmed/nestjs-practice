import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private _users = [
    { id: 1, name: 'Larry Lopez', email: 'cmiller@hotmail.com', role: 'admin' },
    {
      id: 2,
      name: 'Hannah Johnson',
      email: 'hollandashley@lewis.org',
      role: 'subscriber',
    },
    {
      id: 3,
      name: 'Kenneth Hernandez',
      email: 'kayla93@gmail.com',
      role: 'admin',
    },
    {
      id: 4,
      name: 'Cassandra Jones',
      email: 'ybryant@yahoo.com',
      role: 'subscriber',
    },
    { id: 5, name: 'Thomas Hayes', email: 'anna06@gmail.com', role: 'admin' },
    {
      id: 6,
      name: 'Debbie Moore',
      email: 'daughertylaura@gmail.com',
      role: 'subscriber',
    },
    {
      id: 7,
      name: 'Patrick Elliott',
      email: 'wlynch@yahoo.com',
      role: 'admin',
    },
    {
      id: 8,
      name: 'David Myers',
      email: 'hernandezpeter@kelley.info',
      role: 'admin',
    },
    {
      id: 9,
      name: 'John Allen',
      email: 'pettydawn@rosario.com',
      role: 'subscriber',
    },
    {
      id: 10,
      name: 'Wayne Thompson',
      email: 'jerryphillips@weber-thompson.com',
      role: 'admin',
    },
  ];
}
