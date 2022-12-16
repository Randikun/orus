import { config, parse } from 'dotenv'
import { join } from 'path';

export class DatabaseConfig {
    private readonly envConfig: Record<string, string>;

    constructor() {
        config();
        this.envConfig = { ...process.env, ...parse };
    }

    public get(key: string) {
        return this.envConfig[key]
    }

    public getDatabaseHost() {
        return this.get('DB_HOST')
    }

    public getDatabasePort() {
        return this.get('DB_PORT')
    }

    public getDatabaseUsername() {
        return this.get('DB_USERNAME')
    }

    public getDatabasePassword() {
        return this.get('DB_PASSWORD')
    }

    public getDatabase() {
        return this.get('DB_DATABASE')
    }


    public getMysqlConnectionOptions() {
        return {
            type: 'mysql',
            host: this.getDatabaseHost(),
            port: Number(this.getDatabasePort),
            username: this.getDatabaseUsername(),
            password: this.getDatabasePassword(),
            database: this.getDatabase(),
            synchronize: false,
            migrationsRun: false,
            entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
        }
    }
}