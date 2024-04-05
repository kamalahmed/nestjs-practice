import { IsEmail, IsNotEmpty, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['admin', 'subscriber'], {
    message: 'Supply a valid role. Valid values are admin, subscriber',
  })
  role: 'admin' | 'subscriber';
}
