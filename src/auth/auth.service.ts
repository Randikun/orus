import { UserService } from '@/users/users.service';
import { UserCreateDto } from '@/auth/index';
import { Injectable } from '@nestjs/common';
import { ErrorWithNested } from '@/application/ErrorWithNested';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  public async register(userCreateDto: UserCreateDto): Promise<void> {
    await this.userService.createUser(userCreateDto);
  }
}
