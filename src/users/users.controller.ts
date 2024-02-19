import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.create(createUserDto);
  }

  @Get(':id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}
