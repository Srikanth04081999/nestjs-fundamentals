import { IsIn, IsOptional } from 'class-validator';

export class FilterUsersDto {
  @IsOptional()
  @IsIn(['admin', 'user'])
  role?: 'admin' | 'user';
}