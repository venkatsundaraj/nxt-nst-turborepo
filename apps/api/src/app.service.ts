import { Injectable } from '@nestjs/common';
import { User } from '@repo/api';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllUsers(id: number): User {
    const res = id || undefined;
    const user = {
      name: 'venkat',
      age: res ?? 234,
    };

    return user;
  }
}
