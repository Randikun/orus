import { FactoryProvider, Module } from '@nestjs/common';
import connectionSource from '@/ormconfig';
import { DataSource, ObjectType, Repository } from 'typeorm';
import { User } from '@/entities/user.entity';

const entityProvider = <T>(entity: ObjectType<T>): FactoryProvider => ({
  provide: `${entity.name.toString()}Repository`,
  useFactory: (connection: DataSource): Repository<T> =>
    connection.getRepository(entity),
  inject: ['DATABASE_CONNECTION'],
});

const entityProviders = [entityProvider(User)];

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        return connectionSource.initialize();
      },
    },
    ...entityProviders,
  ],
  exports: ['DATABASE_CONNECTION', ...entityProviders.map((p) => p.provide)],
})
export class DatabaseModule {}
