import { config, parse } from 'dotenv';

export class DatabaseConfig {
  private readonly envConfig: Record<string, string>;

  constructor() {
    config();
    this.envConfig = { ...process.env, ...parse };
  }

  public get(key: string) {
    return this.envConfig[key];
  }

  public getDatabaseHost() {
    return this.get('DB_HOST');
  }

  public getDatabasePort() {
    return this.get('DB_PORT');
  }

  public getDatabaseUsername() {
    return this.get('DB_USERNAME');
  }

  public getDatabasePassword() {
    return this.get('DB_PASSWORD');
  }

  public getDatabase() {
    return this.get('DB_DATABASE');
  }
}
