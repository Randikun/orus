import { Get, Injectable } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from '@/auth/index';
import { AuthService } from '@/auth/auth.service';

@Injectable()
@Controller('v1')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() dto: UserCreateDto) {
    await this.authService.register(dto);
  }
}
