import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Srikanth',
      email: 'srikanth@example.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Ravi',
      email: 'ravi@example.com',
      role: 'user',
    },
  ];

  private nextId = 3;

  findAll(role?: 'admin' | 'user'): User[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.nextId++,
      name: createUserDto.name,
      email: createUserDto.email,
      role: createUserDto.role,
    };

    this.users.push(user);

    return user;
  }
}