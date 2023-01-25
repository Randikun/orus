import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DatabaseConfig } from './database/database.config';

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
  entities: [__dirname + '/../**/*.entity.js'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],

  // FIX THIS SOON

  // TO RUN SERVER SUCCESSFULLY
  migrations: ['migrations/*{.js}'],
  cli: {
    migrationsDir: 'migrations/*{.js}',
  },

  /*
  TO RUN TYPEORM MIGRATIONS: 
  migrations: ["migrations/*{.ts,.js}"],
  cli: { "migrationsDir": "migrations/*{.ts,.js}" }
  */
} as DataSourceOptions);
export default connectionSource;
