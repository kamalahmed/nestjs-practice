import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // create REST routes for users.
  @Get() // GET /users
  findAll(@Query('role') role?: 'admin' | 'subscriber'): object {
    return [role];
  }

  @Get(':id') // GET /users/123
  findOne(@Param('id') id: string): object {
    return { id };
  }
  @Post() // POST /users
  create(@Body() user: object): object {
    return user;
  }
  @Patch(':id') // PATCH /users/123
  update(@Param('id') id: string, @Body() user: object): object {
    return { id, ...user };
  }
  @Delete(':id') // DELETE /users/123
  remove(@Param('id') id: string): object {
    return { id };
  }
}
