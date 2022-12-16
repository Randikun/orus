import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionOptions } from '@/database/index';
import { DatabaseConfig } from '@/database/database.config';

const databaseConfig = new DatabaseConfig()

@Module({
    imports: [
        TypeOrmModule.forRoot(
            databaseConfig.getMysqlConnectionOptions() as DatabaseConnectionOptions
        )
    ]
})

export class DatabaseModule { }