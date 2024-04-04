import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Users } from './users';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [Users],
})
export class UsersModule {}
