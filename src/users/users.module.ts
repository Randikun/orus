import { Module } from '@nestjs/common';
import { UserService } from '@/users/users.service';
import { DatabaseModule } from '@/database/database.module';
import { Cypher } from '@/utils/cypher';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, Cypher],
  exports: [UserService],
})
export class UsersModule {}
