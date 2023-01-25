import { IsString, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  constructor(userCreateDto: Partial<UserCreateDto>) {
    Object.assign(this, userCreateDto);
  }
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}

export enum PassportStrategies {
  JWT = 'jwt',
}
