import { Module } from '@nestjs/common';
import { AppController } from '@/application/app.controller'
import { AppService } from '@/application/app.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
