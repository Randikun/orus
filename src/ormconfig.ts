import { join } from 'path';
import { DataSource } from 'typeorm';
import { DatabaseConfig } from '@/database/database.config';

const config = new DatabaseConfig();

const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: config.getDatabaseHost(),
  username: config.getDatabaseUsername(),
  password: config.getDatabasePassword(),
  database: config.getDatabase(),
  port: Number(config.getDatabasePort()) || 3306,
  logging: false,
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: ['dist/migrations/*.js'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
export default connectionSource;
