import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { type User } from '@repo/api';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get('/hello/:id')
  getAllUsers(@Param('id') id: string): User {
    const int = parseInt(id);
    return this.appService.getAllUsers(int);
  }
}
