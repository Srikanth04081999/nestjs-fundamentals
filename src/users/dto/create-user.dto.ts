import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name!: string;

  @IsEmail()
  email!: string;

  @IsIn(['admin', 'user'])
  role!: 'admin' | 'user';
}