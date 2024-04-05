import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'subscriber';
}
@Injectable()
export class UsersService {
  private _users: User[] = [
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

  findAll(role?: 'admin' | 'subscriber') {
    if (role) {
      const usersWithGivenRoles = this._users.filter(
        (user) => user.role === role,
      );
      if (usersWithGivenRoles.length === 0) {
        throw new NotFoundException(`No users with role ${role}`);
      }
      return usersWithGivenRoles;
    }
    if (this._users.length === 0) {
      throw new NotFoundException(`No users found`);
    }

    return this._users;
  }

  findOne(id: number): User {
    return this._users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this._users.length + 1,
      ...createUserDto,
    };
    this._users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this._users = this._users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });

    return this.findOne(id);
  }

  remove(id: number): User {
    const foundUser = this._users.find((user) => user.id === id);
    if (foundUser) {
      this._users = this._users.filter((user) => user.id !== id);
    }
    return foundUser;
  }
}
