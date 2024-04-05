import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ValidationPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
interface User {
  id?: number;
  name: string;
  email: string;
  role: 'admin' | 'subscriber';
}
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // create REST routes for users.
  @Get() // GET /users
  findAll(@Query('role') role?: 'admin' | 'subscriber'): object {
    return this.usersService.findAll(role);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): User {
    // here id is always passed as string from the url parameter. Using number type does not convert to number.
    return this.usersService.findOne(id);
  }
  @Post() // POST /users
  create(@Body(ValidationPipe) createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }
  @Patch(':id') // PATCH /users/123
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): User {
    // id is always passed as string from the url parameter. Using number type does not convert to number.
    return this.usersService.update(id, updateUserDto);
  }
  @Delete(':id') // DELETE /users/123
  remove(@Param('id', ParseIntPipe) id: number): User {
    return this.usersService.remove(id);
  }
}
