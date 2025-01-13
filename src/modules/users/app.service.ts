import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import prisma from '../../prisma.service';

// export interface User {
//   username: string;
//   age: number;
// }

@Injectable()
export class AppService {
  // data dummy
  // private users: User[] = [
  //   { username: 'bangg', age: 20 },
  //   { username: 'bangg2', age: 21 },
  //   { username: 'bangg3', age: 22 },
  // ];

  private users: CreateUserDto[] = [
    {
      email: 'andre@gmail.com',
      userName: 'Andreas',
      isActived: true,
    },
    {
      email: 'sugra@gmail.com',
      userName: 'Sugara',
      isActived: true,
    },
    {
      email: 'joko21@gmail.com',
      userName: 'joko',
      isActived: false,
    },
  ];

  getHello(): string {
    return 'Hello Bangg!';
  }

  findUser(username: string): CreateUserDto {
    return this.users.find(user => user.userName === username);
  }

  deleteUser(username: string): CreateUserDto[] {
    const user = this.findUser(username);
    if (!user) {
      throw new Error(`User with username "${username}" not found`);
    }

    this.users = this.users.filter(user => user.userName !== username);
    return this.users;
  }

  saveUser(entity: CreateUserDto): CreateUserDto {
    this.users.push(entity);
    return entity;
  }

  async createUser(data: CreateUserDto): Promise<any> {
    const result = await prisma.user.create({
      data: {
        email: data.email,
        userName: data.userName,
        isActived: data.isActived ? 'ACTIVE' : 'INACTIVE',
      },
    });
    return result;
  }

  async getAllUsers(): Promise<any[]> {
    const result = await prisma.user.findMany();
    return result;
  }

  async getUserById(id: number): Promise<any> {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
}
