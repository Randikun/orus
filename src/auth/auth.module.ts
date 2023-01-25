import { Module } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { UsersModule } from '@/users/users.module';
import { AuthController } from '@/auth/auth.controller';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
